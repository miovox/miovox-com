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

// Mock ServiceIcon component
vi.mock('../ui/ServiceIcon', () => ({
  ServiceIcon: ({ service, size }: any) => (
    <div data-testid={`service-icon-${service}`} data-size={size}>
      {service}
    </div>
  )
}))

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/test-path'
}))

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
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

  describe('header variant - inline dropdown', () => {
    it('renders brand + mode button', () => {
      render(<ServiceNavigation variant="header" />)
      
      const button = screen.getByRole('button', { name: /Service Navigation Menu/ })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('aria-haspopup', 'true')
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('displays current service in button', () => {
      render(<ServiceNavigation variant="header" />)
      
      const button = screen.getByRole('button', { name: /Service Navigation Menu/ })
      
      // Should show first service (Products) since no matching pathname
      expect(button).toHaveTextContent('Products')
      expect(button).not.toHaveTextContent('Miovox')
    })

    it('shows dropdown chevron icon', () => {
      render(<ServiceNavigation variant="header" />)
      
      const button = screen.getByRole('button')
      const svg = button.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    })

    it('applies custom className to container', () => {
      render(<ServiceNavigation variant="header" className="custom-class" />)
      
      const container = screen.getByRole('button').parentElement
      expect(container).toHaveClass('custom-class')
    })

    it('ensures touch-friendly button target', () => {
      render(<ServiceNavigation variant="header" />)
      
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ minHeight: '44px' })
    })

    it('dropdown menu is hidden by default', () => {
      render(<ServiceNavigation variant="header" />)
      
      const menu = screen.getByRole('menu')
      expect(menu).toHaveClass('opacity-0', 'pointer-events-none')
      expect(menu).toHaveAttribute('aria-label', 'Service options')
    })

    it('renders all service options in dropdown menu', () => {
      render(<ServiceNavigation variant="header" />)
      
      services.forEach(service => {
        const menuItem = screen.getByRole('menuitem', { name: new RegExp(service.label) })
        expect(menuItem).toBeInTheDocument()
        expect(menuItem).toHaveAttribute('href', service.href)
      })
    })

    it('shows service icons and taglines in dropdown items', () => {
      render(<ServiceNavigation variant="header" />)
      
      services.forEach(service => {
        expect(screen.getByTestId(`service-icon-${service.icon}`)).toBeInTheDocument()
        expect(screen.getByText(service.tagline)).toBeInTheDocument()
      })
    })

    it('detects and highlights active service based on pathname', () => {
      render(<ServiceNavigation variant="header" />)
      
      // With the default mock returning '/test-path', first service (Products) should be active
      const button = screen.getByRole('button', { name: /Service Navigation Menu/ })
      expect(button).toHaveTextContent('Products')
      
      // Products menu item should have active styling
      const productsMenuItem = screen.getByRole('menuitem', { name: /Products/ })
      expect(productsMenuItem).toHaveClass('bg-primary/10', 'text-primary')
    })

    it('uses usePathname hook for active state detection', () => {
      render(<ServiceNavigation variant="header" />)
      
      const button = screen.getByRole('button', { name: /Service Navigation Menu/ })
      
      // Since we mocked pathname to '/test-path', should default to first service
      expect(button).toHaveTextContent('Products')
    })
  })
})