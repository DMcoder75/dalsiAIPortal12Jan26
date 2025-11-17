import { ChevronRight, Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Breadcrumb({ items = [] }) {
  const location = useLocation()

  // Generate breadcrumb items from path if not provided
  const getBreadcrumbItems = () => {
    if (items.length > 0) {
      return items
    }

    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs = [{ label: 'Home', href: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      breadcrumbs.push({ label, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbItems()

  // Generate schema markup for SEO
  useEffect(() => {
    const schemaMarkup = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `${window.location.origin}${item.href}`
      }))
    }

    // Remove existing schema if present
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-breadcrumb]')
    if (existingSchema) {
      existingSchema.remove()
    }

    // Add new schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb', 'true')
    script.textContent = JSON.stringify(schemaMarkup)
    document.head.appendChild(script)

    return () => {
      const schema = document.querySelector('script[type="application/ld+json"][data-breadcrumb]')
      if (schema) {
        schema.remove()
      }
    }
  }, [breadcrumbs])

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-background/50 border-b border-border py-4 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-2 flex-shrink-0" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  {index === 0 ? (
                    <span className="flex items-center space-x-1">
                      <Home className="h-4 w-4" />
                      <span>{item.label}</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
