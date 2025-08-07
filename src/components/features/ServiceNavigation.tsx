'use client'

import { services } from '../../data/services'
import { ServiceCard } from './ServiceCard'

export interface ServiceNavigationProps {
  variant: 'homepage' | 'header'
  className?: string
}

export const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  variant,
  className = ''
}) => {
  if (variant === 'header') {
    // Header variant will be implemented in Story 2.5.3
    return null
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