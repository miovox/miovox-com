'use client'

import Link from 'next/link'
// import Image from 'next/image' // Commented out until background images are implemented
import { type Route } from 'next'
import { ServiceIcon } from '../ui/ServiceIcon'
import { ServiceConfig } from '../../data/services'

export interface ServiceCardProps {
  service: ServiceConfig
  size?: 'standard' | 'large'
  className?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  size = 'standard',
  className = ''
}) => {
  const isLarge = size === 'large'
  
  return (
    <Link 
      href={service.href as Route}
      className={`group relative block overflow-hidden transition-all duration-200 ease-out
        hover:scale-[1.02] hover:z-10 hover:shadow-xl origin-center ${className}`}
      aria-label={`Navigate to ${service.label} - ${service.tagline}`}
    >
      <div className="relative h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-200 ease-out group-hover:scale-105">
        {/* Background Media with Overlay - Commented out until images are created */}
        {/* {service.backgroundMedia && (
          <div className="absolute inset-0">
            <Image
              src={service.backgroundMedia.src}
              alt=""
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              priority={false}
            />
            {service.backgroundMedia.overlay === 'gradient' && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
            )}
          </div>
        )} */}

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-white text-center">
          {/* Service Icon */}
          <div className="mb-2 sm:mb-3">
            <ServiceIcon
              service={service.icon}
              size={isLarge ? 'xxlarge' : 'xlarge'}
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter brightness-95"
              priority={true}
            />
          </div>

          {/* Service Label - Responsive Typography with Embedded Look */}
          <h3 className={`font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter brightness-95
            ${isLarge 
              ? 'text-3xl md:text-4xl xl:text-5xl' 
              : 'text-2xl md:text-3xl xl:text-5xl'
            }`}>
            {service.label}
          </h3>

          {/* Service Tagline - Responsive Typography with Embedded Look */}
          <p className={`text-gray-200 opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] filter brightness-90
            ${isLarge 
              ? 'text-base md:text-lg xl:text-xl' 
              : 'text-sm md:text-base xl:text-xl'
            }`}>
            {service.tagline}
          </p>
        </div>

        {/* Hover overlay for enhanced interaction feedback */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  )
}

export default ServiceCard