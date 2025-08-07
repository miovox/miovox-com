import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ServiceIcon, type ServiceType, type IconSize } from './ServiceIcon';

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt, width, height, className, priority, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-priority={priority}
      {...props}
    />
  ),
}));

// Mock next-themes
const mockUseTheme = vi.fn();
vi.mock('next-themes', () => ({
  useTheme: () => mockUseTheme(),
}));

// Mock icon components
vi.mock('../icons/BrainCircuit', () => ({
  default: ({ className }: { className?: string }) => (
    <svg className={className} data-testid="brain-circuit-icon">
      <title>Brain Circuit Icon</title>
    </svg>
  ),
}));

vi.mock('../icons/Camera', () => ({
  default: ({ className }: { className?: string }) => (
    <svg className={className} data-testid="camera-icon">
      <title>Camera Icon</title>
    </svg>
  ),
}));

vi.mock('../icons/Home', () => ({
  default: ({ className }: { className?: string }) => (
    <svg className={className} data-testid="home-icon">
      <title>Home Icon</title>
    </svg>
  ),
}));

describe('ServiceIcon', () => {
  beforeEach(() => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'light',
    });
  });

  describe('Component Rendering', () => {
    it('renders without errors with minimum props', () => {
      render(<ServiceIcon service="products" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<ServiceIcon service="products" className="custom-class" />);
      const container = document.querySelector('.custom-class');
      expect(container).toBeInTheDocument();
    });

    it('renders with custom alt text', () => {
      render(<ServiceIcon service="products" alt="Custom Products Icon" />);
      expect(screen.getByAltText('Custom Products Icon')).toBeInTheDocument();
    });
  });

  describe('Service Type Variants', () => {
    const services: ServiceType[] = ['products', 'events', 'home-tech', 'about'];

    services.forEach((service) => {
      it(`renders ${service} service icon`, () => {
        render(<ServiceIcon service={service} />);
        
        if (service === 'about') {
          expect(screen.getByAltText('Philip')).toBeInTheDocument();
        } else {
          expect(screen.getByRole('img')).toBeInTheDocument();
        }
      });
    });

    it('renders products service with theme-aware SVG in light theme', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'light' });
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByAltText('Products - AI Development');
      expect(image).toHaveAttribute('src', '/icons/products-light.svg');
    });

    it('renders products service with theme-aware SVG in dark theme', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'dark' });
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByAltText('Products - AI Development');
      expect(image).toHaveAttribute('src', '/icons/products-dark.svg');
    });

    it('renders events service with theme-aware SVG in light theme', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'light' });
      render(<ServiceIcon service="events" />);
      
      const image = screen.getByAltText('Events - Media Production');
      expect(image).toHaveAttribute('src', '/icons/events-light.svg');
    });

    it('renders events service with theme-aware SVG in dark theme', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'dark' });
      render(<ServiceIcon service="events" />);
      
      const image = screen.getByAltText('Events - Media Production');
      expect(image).toHaveAttribute('src', '/icons/events-dark.svg');
    });

    it('renders home-tech service with theme-aware SVG in light theme', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'light' });
      render(<ServiceIcon service="home-tech" />);
      
      const image = screen.getByAltText('Home Tech - Smart Solutions');
      expect(image).toHaveAttribute('src', '/icons/home-tech-light.svg');
    });

    it('renders home-tech service with theme-aware SVG in dark theme', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'dark' });
      render(<ServiceIcon service="home-tech" />);
      
      const image = screen.getByAltText('Home Tech - Smart Solutions');
      expect(image).toHaveAttribute('src', '/icons/home-tech-dark.svg');
    });

    it('renders about service with Philip image', () => {
      render(<ServiceIcon service="about" />);
      
      const image = screen.getByAltText('Philip');
      expect(image).toHaveAttribute('src', '/philip.png');
      expect(image).toHaveClass('rounded-full', 'object-cover', 'border-2', 'border-gray-200');
    });
  });

  describe('Size Variants', () => {
    const sizes: IconSize[] = ['small', 'medium', 'large', 'xlarge', 'xxlarge'];
    
    const expectedDimensions = {
      small: { width: 16, height: 16, className: 'w-4 h-4' },
      medium: { width: 24, height: 24, className: 'w-6 h-6' },
      large: { width: 32, height: 32, className: 'w-8 h-8' },
      xlarge: { width: 48, height: 48, className: 'w-12 h-12' },
      xxlarge: { width: 64, height: 64, className: 'w-16 h-16' },
    };

    sizes.forEach((size) => {
      it(`renders with correct dimensions for ${size} size`, () => {
        render(<ServiceIcon service="products" size={size} />);
        
        const image = screen.getByRole('img');
        const expected = expectedDimensions[size];
        
        expect(image).toHaveAttribute('width', expected.width.toString());
        expect(image).toHaveAttribute('height', expected.height.toString());
        expect(image).toHaveClass(expected.className);
      });
    });

    it('defaults to medium size when no size prop provided', () => {
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('width', '24');
      expect(image).toHaveAttribute('height', '24');
      expect(image).toHaveClass('w-6', 'h-6');
    });
  });

  describe('Theme Integration', () => {
    it('uses light theme as fallback during hydration', () => {
      // Mock unmounted state
      vi.spyOn(require('react'), 'useState').mockReturnValueOnce([false, vi.fn()]);
      
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', '/icons/products-light.svg');
    });

    it('updates icon source when theme changes from light to dark', () => {
      const { rerender } = render(<ServiceIcon service="products" />);
      
      // Initially light theme
      let image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', '/icons/products-light.svg');
      
      // Change to dark theme
      mockUseTheme.mockReturnValue({ resolvedTheme: 'dark' });
      rerender(<ServiceIcon service="products" />);
      
      image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', '/icons/products-dark.svg');
    });

    it('handles system theme resolution correctly', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: 'system' });
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByRole('img');
      // System theme should resolve to light as fallback
      expect(image).toHaveAttribute('src', '/icons/products-light.svg');
    });
  });

  describe('Next.js Image Integration', () => {
    it('passes priority prop to Next.js Image component', () => {
      render(<ServiceIcon service="products" priority={true} />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('data-priority', 'true');
    });

    it('defaults priority to false', () => {
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('data-priority', 'false');
    });

    it('applies transition classes for smooth theme switching', () => {
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveClass('transition-opacity', 'duration-300');
    });

    it('applies rounded styling to Philip image', () => {
      render(<ServiceIcon service="about" />);
      
      const image = screen.getByRole('img');
      expect(image).toHaveClass('rounded-full', 'object-cover');
    });
  });

  describe('Accessibility', () => {
    it('includes proper alt text for all service variants', () => {
      const services: { type: ServiceType; expectedAlt: string }[] = [
        { type: 'products', expectedAlt: 'Products - AI Development' },
        { type: 'events', expectedAlt: 'Events - Media Production' },
        { type: 'home-tech', expectedAlt: 'Home Tech - Smart Solutions' },
        { type: 'about', expectedAlt: 'Philip' },
      ];

      services.forEach(({ type, expectedAlt }) => {
        render(<ServiceIcon service={type} />);
        expect(screen.getByAltText(expectedAlt)).toBeInTheDocument();
      });
    });

    it('allows custom alt text override', () => {
      render(<ServiceIcon service="products" alt="Custom Alt Text" />);
      expect(screen.getByAltText('Custom Alt Text')).toBeInTheDocument();
    });

    it('provides fallback for unknown service types', () => {
      // Cast to bypass TypeScript checking for testing
      render(<ServiceIcon service={'unknown' as ServiceType} />);
      
      const fallback = document.querySelector('[role="img"]');
      expect(fallback).toBeInTheDocument();
      expect(fallback).toHaveAttribute('aria-label', 'Service Icon');
    });
  });

  describe('Error Handling', () => {
    it('provides loading states gracefully', () => {
      render(<ServiceIcon service="products" />);
      
      // Component should render successfully even during loading
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('handles missing theme gracefully', () => {
      mockUseTheme.mockReturnValue({ resolvedTheme: undefined });
      render(<ServiceIcon service="products" />);
      
      const image = screen.getByRole('img');
      // Should fallback to light theme when theme is undefined
      expect(image).toHaveAttribute('src', '/icons/products-light.svg');
    });
  });

  describe('TypeScript Interface Exports', () => {
    it('exports ServiceType and IconSize types', () => {
      // This test ensures the types are properly exported
      // The actual type checking is done at compile time
      const serviceTypes: ServiceType[] = ['products', 'events', 'home-tech', 'about'];
      const iconSizes: IconSize[] = ['small', 'medium', 'large', 'xlarge', 'xxlarge'];
      
      expect(serviceTypes).toBeDefined();
      expect(iconSizes).toBeDefined();
    });
  });
});