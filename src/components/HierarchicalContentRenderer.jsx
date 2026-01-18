import React from 'react'
import { parseAndStructureMarkdown } from '../lib/hierarchicalParser'

/**
 * Hierarchical Content Renderer
 * Renders parsed markdown with proper hierarchy, indentation, and styling
 */
export function HierarchicalContentRenderer({ content }) {
  if (!content || typeof content !== 'string') {
    return <div className="text-gray-400">No content to display</div>
  }

  // Parse the markdown content
  const structured = parseAndStructureMarkdown(content)

  if (!structured || structured.length === 0) {
    return <div className="text-gray-300 text-sm">{content}</div>
  }

  return (
    <div className="hierarchical-content space-y-1">
      {structured.map((item, idx) => (
        <RenderItem key={idx} item={item} index={idx} />
      ))}
    </div>
  )
}

/**
 * Render individual item (heading or content)
 */
function RenderItem({ item, index }) {
  if (item.type === 'heading') {
    return (
      <div key={index} className="heading-with-content">
        {/* Heading */}
        <HeadingComponent item={item} />
        
        {/* Content under this heading */}
        {item.content_items && item.content_items.length > 0 && (
          <div className={`content-under-heading space-y-1 ${getIndentClass(item.depth)}`}>
            {item.content_items.map((contentItem, contentIdx) => (
              <ContentItemComponent
                key={contentIdx}
                item={contentItem}
                depth={item.depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Render standalone content (if any exists outside headings)
  if (item.type === 'content') {
    return (
      <ContentItemComponent
        key={index}
        item={item}
        depth={item.depth || 0}
      />
    )
  }

  return null
}

/**
 * Render heading with styling
 */
function HeadingComponent({ item }) {
  const { level, content, depth } = item
  const styles = getHeadingStyles(level)

  return (
    <div className={`heading-item ${getIndentClass(depth)}`}>
      <div className={styles.container}>
        <h2 className={styles.text}>
          {content}
        </h2>
        <div className={styles.border}></div>
      </div>
    </div>
  )
}

/**
 * Render content item (text, list item, etc.)
 */
function ContentItemComponent({ item, depth }) {
  const { text } = item

  if (!text) return null

  const trimmed = text.trim()
  const isListItem = /^[-*+•]\s+/.test(trimmed)
  const indentClass = getIndentClass(depth)

  if (isListItem) {
    return (
      <div className={`list-item ${indentClass}`}>
        <div className="flex gap-2">
          <span className="text-purple-400 flex-shrink-0 mt-0.5">•</span>
          <p className="text-sm text-gray-200 leading-snug flex-grow">
            {cleanListItemText(trimmed)}
          </p>
        </div>
      </div>
    )
  }

  // Regular paragraph
  return (
    <p className={`paragraph-item ${indentClass} text-sm text-gray-200 leading-snug`}>
      {trimmed}
    </p>
  )
}

/**
 * Get heading styles based on level
 */
function getHeadingStyles(level) {
  const styles = {
    2: {
      container: 'heading-level-2 mt-3 mb-1',
      text: 'text-2xl font-bold text-white',
      border: 'h-1 bg-gradient-to-r from-purple-500 to-purple-300 mt-1 rounded-full'
    },
    3: {
      container: 'heading-level-3 mt-2 mb-0.5',
      text: 'text-xl font-semibold text-purple-200',
      border: 'h-0.5 bg-gradient-to-r from-purple-400 to-purple-200 mt-0.5'
    },
    4: {
      container: 'heading-level-4 mt-2 mb-0.5',
      text: 'text-lg font-semibold text-purple-100',
      border: 'h-0.5 bg-purple-300 mt-0.5'
    },
    5: {
      container: 'heading-level-5 mt-2 mb-0.5',
      text: 'text-base font-semibold text-purple-50',
      border: 'h-px bg-purple-300'
    },
    6: {
      container: 'heading-level-6 mt-2 mb-0.5',
      text: 'text-sm font-semibold text-gray-300',
      border: 'h-px bg-gray-400'
    }
  }

  return styles[level] || styles[6]
}

/**
 * Get indentation class based on depth
 */
function getIndentClass(depth) {
  const indentMap = {
    0: 'pl-0',
    1: 'pl-4 md:pl-6',
    2: 'pl-8 md:pl-12',
    3: 'pl-12 md:pl-16',
    4: 'pl-16 md:pl-20',
    5: 'pl-20 md:pl-24'
  }

  return indentMap[depth] || indentMap[5]
}

/**
 * Clean list item text
 */
function cleanListItemText(text) {
  return text
    .replace(/^[-*+•]\s+/, '')
    .trim()
}

export default HierarchicalContentRenderer
