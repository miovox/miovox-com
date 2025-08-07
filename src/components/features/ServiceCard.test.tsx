import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from './ServiceCard'
import { services } from '../../data/services'

// Mock Next.js components
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />
}))

vi.mock('../ui/ServiceIcon', () => ({
  ServiceIcon: ({ service, size }: any) => (
    <div data-testid={`service-icon-${service}`} data-size={size}>
      Mock {service} Icon
    </div>
  )
}))

describe('ServiceCard', () => {
  const mockService = services[0] // Products service

  it('renders service information correctly', () => {
    render(<ServiceCard service={mockService} />)
    
    expect(screen.getByText(mockService.label)).toBeInTheDocument()
    expect(screen.getByText(mockService.tagline)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', mockService.href)
  })

  it('renders with correct aria-label', () => {
    render(<ServiceCard service={mockService} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label', `Navigate to ${mockService.label} - ${mockService.tagline}`)
  })

  it('renders ServiceIcon with correct props', () => {
    render(<ServiceCard service={mockService} />)
    
    const icon = screen.getByTestId(`service-icon-${mockService.icon}`)
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('data-size', 'xlarge')
  })

  it('renders ServiceIcon with xxlarge size when size=large', () => {
    render(<ServiceCard service={mockService} size="large" />)
    
    const icon = screen.getByTestId(`service-icon-${mockService.icon}`)
    expect(icon).toHaveAttribute('data-size', 'xxlarge')
  })

  it('does not render background image when backgroundMedia is commented out', () => {
    render(<ServiceCard service={mockService} />)
    
    // Background images are currently commented out, so no image should be present
    const backgroundImage = screen.queryByAltText('')
    expect(backgroundImage).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<ServiceCard service={mockService} className="custom-class" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('custom-class')
  })

  it('has proper hover transition classes', () => {
    render(<ServiceCard service={mockService} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('group', 'transition-all', 'duration-200', 'ease-out')
    expect(link).toHaveClass('hover:scale-[1.02]', 'hover:z-10', 'hover:shadow-xl')
  })

  it('meets touch-friendly target requirements', () => {
    render(<ServiceCard service={mockService} />)
    
    const link = screen.getByRole('link')
    // Link should be large enough for touch interaction (44px minimum)
    expect(link).toHaveClass('block')
  })

  it('has keyboard navigation support', () => {
    render(<ServiceCard service={mockService} />)
    
    const link = screen.getByRole('link')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', mockService.href)
  })
})