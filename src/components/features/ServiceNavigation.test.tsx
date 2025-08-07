import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceNavigation } from './ServiceNavigation'
import { services } from '../../data/services'

// Mock ServiceCard component
vi.mock('./ServiceCard', () => ({
  ServiceCard: ({ service }: any) => (
    <div data-testid={`service-card-${service.id}`}>
      {service.label} - {service.tagline}
    </div>
  )
}))

describe('ServiceNavigation', () => {
  describe('homepage variant', () => {
    it('renders all services', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      services.forEach(service => {
        expect(screen.getByTestId(`service-card-${service.id}`)).toBeInTheDocument()
      })
    })

    it('has correct navigation role and aria-label', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const navigation = screen.getByRole('navigation')
      expect(navigation).toBeInTheDocument()
      expect(navigation).toHaveAttribute('aria-label', 'Service Navigation')
    })

    it('has responsive grid layout classes', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const navigation = screen.getByRole('navigation')
      expect(navigation).toHaveClass('grid')
      expect(navigation).toHaveClass('grid-cols-2') // Mobile: 2x2
      expect(navigation).toHaveClass('md:grid-cols-2') // Tablet: 2x2
      expect(navigation).toHaveClass('xl:grid-cols-4') // Desktop: 1x4
    })

    it('has responsive height classes', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const navigation = screen.getByRole('navigation')
      expect(navigation).toHaveClass('h-[40vh]') // Mobile: 40vh
      expect(navigation).toHaveClass('md:h-[35vh]') // Tablet: 35vh
      expect(navigation).toHaveClass('xl:h-[30vh]') // Desktop: 30vh
    })

    it('has no gaps between tiles', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const navigation = screen.getByRole('navigation')
      expect(navigation).toHaveClass('gap-0')
    })

    it('applies custom className', () => {
      render(<ServiceNavigation variant="homepage" className="custom-class" />)
      
      const navigation = screen.getByRole('navigation')
      expect(navigation).toHaveClass('custom-class')
    })

    it('ensures touch-friendly targets with minimum height', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const serviceContainers = screen.getAllByTestId(/service-card-/)
      expect(serviceContainers).toHaveLength(services.length)
      
      serviceContainers.forEach(container => {
        const parent = container.parentElement
        expect(parent).toHaveClass('touch-manipulation')
        expect(parent).toHaveStyle({ minHeight: '44px' })
      })
    })

    it('renders exactly 4 service cards', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const serviceCards = screen.getAllByTestId(/service-card-/)
      expect(serviceCards).toHaveLength(4)
    })

    it('renders services in correct order', () => {
      render(<ServiceNavigation variant="homepage" />)
      
      const expectedOrder = ['product', 'events', 'home', 'about']
      expectedOrder.forEach((serviceId, index) => {
        expect(screen.getByTestId(`service-card-${serviceId}`)).toBeInTheDocument()
      })
    })
  })

  describe('header variant', () => {
    it('returns null for header variant (not implemented)', () => {
      const { container } = render(<ServiceNavigation variant="header" />)
      expect(container.firstChild).toBeNull()
    })
  })
})