'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import BrainCircuit from '../icons/BrainCircuit'
import Camera from '../icons/Camera'
import Home from '../icons/Home'

export type ServiceType = 'products' | 'events' | 'home-tech' | 'about'
export type IconSize = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

export interface ServiceIconProps {
  service: ServiceType
  size?: IconSize
  className?: string
  priority?: boolean
  alt?: string
}

const getSizeDimensions = (size: IconSize): { width: number; height: number; className: string } => {
  switch (size) {
    case 'small':
      return { width: 16, height: 16, className: 'w-4 h-4' }
    case 'medium':
      return { width: 24, height: 24, className: 'w-6 h-6' }
    case 'large':
      return { width: 32, height: 32, className: 'w-8 h-8' }
    case 'xlarge':
      return { width: 48, height: 48, className: 'w-12 h-12' }
    case 'xxlarge':
      return { width: 64, height: 64, className: 'w-16 h-16' }
    default:
      return { width: 24, height: 24, className: 'w-6 h-6' }
  }
}

const getDefaultAlt = (service: ServiceType): string => {
  switch (service) {
    case 'products':
      return 'Products - AI Development'
    case 'events':
      return 'Events - Media Production'
    case 'home-tech':
      return 'Home Tech - Smart Solutions'
    case 'about':
      return 'Philip'
    default:
      return 'Service Icon'
  }
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  service,
  size = 'medium',
  className = '',
  priority = false,
  alt,
}) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const dimensions = getSizeDimensions(size)
  const defaultAlt = getDefaultAlt(service)
  const iconAlt = alt || defaultAlt

  // Handle theme-aware SVG icons for products, events, home-tech
  if (service === 'products' || service === 'events' || service === 'home-tech') {
    // Use light theme as fallback during hydration
    const theme = mounted ? (resolvedTheme === 'dark' ? 'dark' : 'light') : 'light'
    const iconPath = `/icons/${service}-${theme}.svg`
    
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Image
          src={iconPath}
          alt={iconAlt}
          width={dimensions.width}
          height={dimensions.height}
          className={`${dimensions.className} transition-opacity duration-300`}
          priority={priority}
        />
      </div>
    )
  }

  // Handle Philip image for about service
  if (service === 'about') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Image
          src="/philip.png"
          alt={iconAlt}
          width={dimensions.width}
          height={dimensions.height}
          className={`${dimensions.className} rounded-full object-cover transition-opacity duration-300 border-2 border-gray-200`}
          priority={priority}
        />
      </div>
    )
  }

  // Fallback to existing SVG components during development/migration
  const IconComponent = service === 'products' ? BrainCircuit 
    : service === 'events' ? Camera 
    : service === 'home-tech' ? Home 
    : null

  if (!IconComponent) {
    return (
      <div 
        className={`${dimensions.className} bg-muted rounded flex items-center justify-center ${className}`}
        role="img"
        aria-label={iconAlt}
      >
        <span className="text-muted-foreground text-xs">?</span>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent className={dimensions.className} />
    </div>
  )
}

export default ServiceIcon