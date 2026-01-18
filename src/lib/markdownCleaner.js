/**
 * Markdown Cleaner
 * Cleans up Markdown syntax from stored messages for proper display
 */

/**
 * Remove or convert Markdown heading symbols (###) to proper formatting
 * DISABLED: We should NOT remove heading symbols because the formatter needs them
 * to properly detect and render headings as HTML <h1>, <h2>, etc.
 * 
 * @param {string} text - The raw text potentially containing ### symbols
 * @returns {string} - Text unchanged (headings preserved for formatter)
 */
export function cleanMarkdownHeadings(text) {
  if (!text || typeof text !== 'string') return text
  
  // DO NOT remove heading symbols!
  // The smartFormatter.js needs these to detect and render proper HTML headings
  // Removing them causes headings to be treated as regular paragraphs
  return text
}

/**
 * Clean all Markdown formatting issues from stored messages
 * 
 * @param {string} text - The raw text from database
 * @returns {string} - Cleaned text
 */
export function cleanStoredMessageContent(text) {
  if (!text || typeof text !== 'string') return text
  
  // Preserve heading symbols for proper formatter detection
  // The smartFormatter.js will handle converting them to proper HTML headings
  let cleaned = cleanMarkdownHeadings(text)
  
  // Additional cleaning can be added here as needed
  // But DO NOT remove Markdown syntax that the formatter needs
  
  return cleaned
}
