'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Route } from 'next'
import { useState, useRef, useEffect } from 'react'
import { services } from '../../data/services'
import { ServiceCard } from './ServiceCard'
import { ServiceIcon } from '../ui/ServiceIcon'

export interface ServiceNavigationProps {
  variant: 'homepage' | 'header'
  className?: string
}

export const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  variant,
  className = ''
}) => {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsDropdownOpen(false)
    }
  }

  if (variant === 'header') {
    // Header variant - Inline dropdown navigation matching prototype
    // Find the current active service based on pathname
    const activeService = services.find(service => 
      pathname === service.href || (service.href !== '/' && pathname.startsWith(service.href))
    ) || services[0] // Default to first service if no match
    
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        {/* Brand + Mode Button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onKeyDown={handleKeyDown}
          className="flex items-center gap-1 px-1 py-1.5 rounded-lg transition-all duration-200 ease-out
                     hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none
                     text-foreground font-medium text-lg"
          aria-label="Service Navigation Menu"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          style={{ minHeight: '44px' }}
        >
          <span className="text-muted-foreground">{activeService.label}</span>
          <svg
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full left-0 mt-2 bg-background border border-border rounded-xl p-2 
                     shadow-xl backdrop-blur-sm min-w-[240px] transition-all duration-200 ease-out z-50
                     ${
                       isDropdownOpen
                         ? 'opacity-100 pointer-events-auto transform translate-y-0 scale-100'
                         : 'opacity-0 pointer-events-none transform translate-y-[-10px] scale-95'
                     }`}
          role="menu"
          aria-label="Service options"
          onKeyDown={handleKeyDown}
        >
          {services.map((service) => {
            const isActive = service.id === activeService.id
            
            return (
              <Link
                key={service.id}
                href={service.href as Route}
                onClick={() => setIsDropdownOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ease-out
                  hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none
                  text-sm font-medium relative
                  ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground'}
                `}
                role="menuitem"
                aria-label={`Navigate to ${service.label} - ${service.tagline}`}
              >
                <ServiceIcon 
                  service={service.icon}
                  size="small"
                  className="h-5 w-5 flex-shrink-0"
                  priority={false}
                />
                <div className="flex flex-col flex-1">
                  <span className="font-semibold">{service.label}</span>
                  <span className="text-xs text-muted-foreground">{service.tagline}</span>
                </div>
                {isActive && (
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  // Homepage variant - Responsive grid layout
  // Desktop (≥1025px): 1×4 grid, 30vh height
  // Tablet (641px-1024px): 2×2 grid, 35vh height  
  // Mobile (≤640px): 2×2 grid, 40vh height
  return (
    <section 
      className={`w-full grid gap-0 overflow-hidden ${className}
        grid-cols-2 h-[40vh]
        md:grid-cols-2 md:h-[35vh]
        xl:grid-cols-4 xl:h-[30vh]`}
      role="navigation"
      aria-label="Service Navigation"
    >
      {services.map((service) => (
        <div
          key={service.id}
          className="touch-manipulation"
          style={{ minHeight: '44px' }} // Ensures touch-friendly targets
        >
          <ServiceCard
            service={service}
            size="standard"
            className="h-full w-full"
          />
        </div>
      ))}
    </section>
  )
}

export default ServiceNavigation