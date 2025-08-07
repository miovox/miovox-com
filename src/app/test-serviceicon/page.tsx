'use client'

import { ServiceIcon, type ServiceType, type IconSize } from '@/components/ui/ServiceIcon'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import Container from '@/components/ui/Container'

const services: ServiceType[] = ['products', 'events', 'home-tech', 'about']
const sizes: IconSize[] = ['small', 'medium', 'large', 'xlarge', 'xxlarge']

const serviceLabels = {
  products: 'Products (Brain/Circuit)',
  events: 'Events (Camera)',
  'home-tech': 'Home Tech (Home)',
  about: 'About (Philip)'
}

const sizeLabels = {
  small: '16px',
  medium: '24px', 
  large: '32px',
  xlarge: '48px',
  xxlarge: '64px'
}

export default function TestServiceIconPage() {
  return (
    <div className="min-h-screen bg-background">
      <Container>
        <div className="py-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">ServiceIcon Component Test</h1>
              <p className="text-muted-foreground mt-2">Visual validation of all service types and sizes</p>
            </div>
            <ThemeToggle />
          </div>

          {/* Size Matrix */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Size Variants by Service Type</h2>
            <div className="grid gap-6">
              {services.map((service) => (
                <div key={service} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    {serviceLabels[service]}
                  </h3>
                  <div className="flex items-center gap-8 flex-wrap">
                    {sizes.map((size) => (
                      <div key={size} className="flex flex-col items-center gap-2">
                        <ServiceIcon service={service} size={size} />
                        <span className="text-sm text-muted-foreground">
                          {size} ({sizeLabels[size]})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Testing Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Theme-Aware Icons (Toggle theme to test)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <div key={service} className="border border-border rounded-lg p-6 bg-card text-center">
                  <ServiceIcon service={service} size="xlarge" className="mx-auto mb-3" />
                  <h4 className="font-medium text-foreground">{serviceLabels[service]}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service === 'about' ? 'Static PNG' : 'Theme-aware SVG'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Alt Text Test */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Custom Props & Accessibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-medium text-foreground mb-4">Custom Alt Text</h4>
                <div className="flex items-center gap-4">
                  <ServiceIcon 
                    service="products" 
                    size="large" 
                    alt="Custom AI Development Icon"
                  />
                  <span className="text-sm text-muted-foreground">
                    Alt: &quot;Custom AI Development Icon&quot;
                  </span>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-medium text-foreground mb-4">Priority Loading</h4>
                <div className="flex items-center gap-4">
                  <ServiceIcon 
                    service="about" 
                    size="large" 
                    priority={true}
                  />
                  <span className="text-sm text-muted-foreground">
                    Priority loading enabled
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Showcase */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Responsive Design Test</h2>
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
                {services.map((service) => (
                  <div key={service} className="text-center">
                    <ServiceIcon 
                      service={service} 
                      size="medium"
                      className="mx-auto mb-2" 
                    />
                    <span className="text-xs text-muted-foreground block">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Info */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <h3 className="text-lg font-medium text-foreground mb-4">Implementation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Assets</h4>
                <ul className="space-y-1">
                  <li>• SVG icons: Theme-aware variants (light/dark)</li>
                  <li>• Philip image: Optimized to 91KB (from ~1MB)</li>
                  <li>• Next.js Image: Automatic optimization</li>
                  <li>• Hydration: Light theme fallback</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Features</h4>
                <ul className="space-y-1">
                  <li>• TypeScript: Strict typing, no any types</li>
                  <li>• Accessibility: Proper alt text & ARIA</li>
                  <li>• Error handling: Graceful fallbacks</li>
                  <li>• Test coverage: 33 test cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}