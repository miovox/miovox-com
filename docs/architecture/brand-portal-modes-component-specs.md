# Service Navigation - Component Specifications

## Overview

This document provides detailed technical specifications for the new components required for the Service Navigation enhancement (Epic 2.5).

## Component Hierarchy

```
ServiceNavigation (main component)
├── ServiceCard (homepage variant)
│   ├── Background Media (image/texture/video + overlay)
│   ├── ServiceIcon (Products/Events/Home Tech/About)
│   ├── Service Label
│   └── Tagline
└── ServiceDropdown (header variant)
    ├── ServiceIcon (service pillar icons)
    └── Service Label
```

---

## Core Components

### 1. ServiceIcon Component

**Purpose**: Unified service pillar icon component with support for all services including Philip icon

#### Interface
```typescript
interface ServiceIconProps {
  type: 'products' | 'events' | 'home-tech' | 'about';
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  className?: string;
  priority?: boolean;
}

// Size mappings
const sizeMap = {
  small: { width: 16, height: 16 },     // Header usage
  medium: { width: 24, height: 24 },   // Default
  large: { width: 32, height: 32 },    // Standard tiles
  xlarge: { width: 48, height: 48 },   // Large tiles
  xxlarge: { width: 64, height: 64 }   // Largest browsers
};
```

#### Implementation Requirements
- **Icon Types**: 
  - Products: Brain/Circuit icon (AI Product Development)
  - Events: Camera icon (Event Media Production)
  - Home Tech: Home icon (Smart Home Solutions)
  - About: `/philip.png` (optimized <100KB)
- **Theme Awareness**: Service pillar icons switch light/dark variants via next-themes
- **Asset Sources**: Service-specific icons representing each business pillar
- **Responsive Scaling**: Automatically scales from small (16px) to xxlarge (64px)
- **Optimization**: Next.js Image component with proper `sizes` prop
- **Accessibility**: Descriptive alt text for each service type

#### File Location
`src/components/ui/ServiceIcon.tsx`

---

### 2. ServiceNavigation Component

**Purpose**: Main navigation component with dual variants (homepage/header)

#### Interface
```typescript
interface ServiceNavigationProps {
  variant: 'homepage' | 'header';
  className?: string;
  currentService?: ServiceId;
}

type ServiceId = 'product' | 'events' | 'home' | 'about';

interface ServiceConfig {
  id: ServiceId;
  label: string;
  tagline: string;
  href: string;
  icon: 'products' | 'events' | 'home-tech' | 'about';
  bgColor: string;
  hoverColor: string;
  textColor?: string;
}
```

#### Service Configuration
```typescript
const serviceConfigs: ServiceConfig[] = [
  {
    id: 'product',
    label: 'Products',
    tagline: 'Crafting Tools',
    href: '/product',
    icon: 'products',
    bgColor: 'bg-miovox-blue-50',
    hoverColor: 'hover:bg-miovox-blue-100'
  },
  {
    id: 'events',
    label: 'Events',
    tagline: 'Crafting Memories',
    href: '/events',
    icon: 'events',
    bgColor: 'bg-miovox-blue-100',
    hoverColor: 'hover:bg-miovox-blue-200'
  },
  {
    id: 'home',
    label: 'Homes',
    tagline: 'Crafting Lifestyles',
    href: '/home',
    icon: 'home-tech',
    bgColor: 'bg-miovox-blue-200',
    hoverColor: 'hover:bg-miovox-blue-300'
  },
  {
    id: 'about',
    label: 'About',
    tagline: 'It\'s This Guy',
    href: '/about',
    icon: 'about',
    bgColor: 'bg-miovox-blue-300',
    hoverColor: 'hover:bg-miovox-blue-400'
  }
];
```

#### Variant Behaviors

##### Homepage Variant
- **Layout**: CSS Grid 2×2 (grid-cols-2 grid-rows-2)
- **Height**: 30vh fixed height
- **Tile Size**: 25% width each, equal height distribution
- **Content**: Icon + Label + Tagline
- **Interactions**: Hover scale (scale-105), background color transition
- **Typography**: 
  - Label: text-2xl md:text-3xl font-bold
  - Tagline: text-lg md:text-xl text-muted-foreground

##### Header Variant  
- **Layout**: Horizontal flex layout
- **Styling**: Matches ThemeToggle button group pattern
- **Content**: Icon + Label (responsive text visibility)
- **Interactions**: Active state highlighting, hover feedback
- **Typography**: text-sm font-medium
- **Responsive**: 
  - Desktop: Icon + full label
  - Mobile: Icon only or abbreviated labels

#### File Location
`src/components/features/ServiceNavigation.tsx`

---

### 3. ServiceCard Component (Sub-component)

**Purpose**: Individual tile component for homepage variant with rich background media support

#### Interface
```typescript
interface ServiceCardProps {
  service: ServiceConfig;
  className?: string;
  isActive?: boolean;
  backgroundMedia?: {
    type: 'image' | 'texture' | 'video';
    src: string;
    overlay?: 'gradient' | 'solid' | 'none';
  };
}
```

#### Implementation Requirements
- **Container**: Link component wrapping card content
- **Background Media**: Full-bleed background image, texture, or video with stylized overlays
- **Visual Hierarchy**: ServiceIcon (large/xlarge/xxlarge variants), service label, tagline over background
- **Icon**: Dynamically render ServiceIcon based on service.icon type
- **Responsive Scaling**: Icon and text sizing adapts to viewport (largest browsers get xxlarge icons)
- **Interactive States**: Sophisticated hover animations with background media transitions
- **Overlay Support**: Gradient or solid overlays for text readability over background media
- **Accessibility**: Proper ARIA labels, keyboard focus indicators, sufficient contrast ratios

#### Background Media Assets
- **Products**: `/public/backgrounds/products-bg.jpg`
- **Events**: `/public/backgrounds/events-bg.jpg`
- **Home Tech**: `/public/backgrounds/home-tech-bg.jpg`
- **About**: `/public/backgrounds/about-bg.jpg`
- **Videos**: Optional `/public/backgrounds/videos/` directory

#### File Location
`src/components/features/ServiceCard.tsx` (or inline within ServiceNavigation)

---

## Layout Specifications

### Homepage Layout Structure

```css
/* Container Layout */
.homepage-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section - Takes remaining space */
.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Navigation Grid - Fixed height */
.navigation-grid {
  height: 30vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0; /* Tiles touch each other */
}

/* Individual Tiles */
.service-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transition: all 0.3s ease-out;
}

.service-tile:hover {
  transform: scale(1.02);
  z-index: 10;
}
```

### Header Layout Integration

```css
/* Header Structure */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

/* Right Navigation Group */
.header-nav-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Service Switcher in Header */
.header-service-switcher {
  display: flex;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.25rem;
}

.service-button {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-out;
}
```

---

## Responsive Design Specifications

### Breakpoint Strategy

#### Desktop (≥1025px)
- **Homepage**: Full 2×2 grid, 30vh height
- **Header**: Full service switcher with icon + text labels
- **Typography**: Maximum text sizes
- **Spacing**: Comfortable padding and margins

#### Tablet (641px-1024px)
- **Homepage**: 2×2 grid, 35vh height for better touch targets
- **Header**: Abbreviated text labels or icon + shortened text
- **Typography**: Medium text sizes
- **Spacing**: Touch-friendly (minimum 44px targets)

#### Mobile (≤640px)
- **Homepage**: Alternative layouts
  - Option A: Vertical stack (4 rows × 1 column)
  - Option B: Compressed 2×2 grid
  - Height: 40vh to accommodate smaller screens
- **Header**: Icon-only service switcher or collapsible menu
- **Typography**: Larger for readability
- **Spacing**: Maximum touch-friendly sizing

### Responsive Implementation

```typescript
// Tailwind responsive classes example
const responsiveClasses = {
  homepage: {
    grid: "grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2",
    height: "h-[40vh] md:h-[35vh] lg:h-[30vh]",
    text: "text-xl md:text-2xl lg:text-3xl"
  },
  header: {
    button: "px-2 sm:px-3 py-1.5",
    text: "hidden sm:inline-block lg:inline",
    icon: "w-4 h-4"
  }
};
```

---

## State Management

### Current Service Detection

```typescript
import { usePathname } from 'next/navigation';

function useCurrentService(): ServiceId | null {
  const pathname = usePathname();
  
  const serviceMap: Record<string, ServiceId> = {
    '/product': 'product',
    '/events': 'events',
    '/home': 'home',
    '/about': 'about'
  };
  
  return serviceMap[pathname] || null;
}
```

### Theme Integration

```typescript
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function useThemeAwareAsset(lightSrc: string, darkSrc: string): string {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fallback to light during hydration
  return mounted 
    ? (resolvedTheme === 'dark' ? darkSrc : lightSrc)
    : lightSrc;
}
```

---

## Performance Considerations

### Asset Optimization

#### Image Loading Strategy
```typescript
// Critical path images (homepage tiles)
<MLogo size="large" priority={true} />

// Non-critical images (header)
<MLogo size="small" priority={false} />
```

#### Next.js Image Configuration
```typescript
// next.config.js additions
const config = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96],
  }
};
```

### Bundle Size Impact
- **MLogo**: ~2KB (component + logic)
- **PhilipIcon**: ~1.5KB (component + logic)  
- **ServiceNavigation**: ~5KB (component + variants + background media support)
- **ServiceCard**: ~2KB (rich background media component)
- **Total Addition**: ~7.5KB to bundle
- **Asset Impact**: +144KB (M-logos) + <100KB (optimized Philip icon)

### Performance Monitoring
- Monitor Core Web Vitals impact
- Ensure LCP not affected by layout changes
- Validate CLS remains minimal during theme switching
- Test loading performance on slower connections

---

## Accessibility Specifications

### WCAG AA Compliance

#### Keyboard Navigation
```typescript
// Keyboard event handling for tiles
const handleKeyPress = (event: KeyboardEvent, href: string) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    router.push(href);
  }
};
```

#### ARIA Implementation
```typescript
// Service tile ARIA attributes
<Link
  href={service.href}
  role="button"
  aria-label={`Navigate to ${service.label} - ${service.tagline}`}
  className="service-tile"
>
  {/* Tile content */}
</Link>

// Header service switcher ARIA
<div
  role="group"
  aria-label="Navigation services"
  className="header-service-switcher"
>
  {/* Service buttons */}
</div>
```

#### Focus Management
- Clear focus indicators on all interactive elements
- Logical tab order through navigation elements  
- Focus trapping if implementing mobile menu
- High contrast focus outlines

#### Screen Reader Support
- Descriptive alt text for all icons
- Proper heading hierarchy maintained
- Navigation landmarks clearly defined
- Status updates for active service changes

### Color Contrast
- Ensure all text meets WCAG AA contrast ratios (4.5:1 minimum)
- Test with various color vision deficiencies
- Validate hover states maintain sufficient contrast
- Include high contrast mode support

---

## Testing Specifications

### Unit Tests

#### Component Tests
```typescript
// MLogo.test.tsx
describe('MLogo Component', () => {
  it('renders correct asset based on theme', () => {});
  it('applies size props correctly', () => {});
  it('handles theme switching without flicker', () => {});
});

// ServiceNavigation.test.tsx  
describe('ServiceNavigation Component', () => {
  it('renders homepage variant with 4 tiles and background media', () => {});
  it('renders header variant with service icon dropdown', () => {});
  it('highlights active service correctly', () => {});
  it('handles navigation clicks', () => {});
  it('supports responsive icon scaling', () => {});
});

// ServiceCard.test.tsx
describe('ServiceCard Component', () => {
  it('renders background media correctly', () => {});
  it('applies overlay gradients properly', () => {});
  it('scales ServiceIcon based on viewport', () => {});
  it('maintains accessibility with background media', () => {});
});
```

#### Integration Tests
```typescript
// Homepage layout tests
describe('Homepage Layout Integration', () => {
  it('renders without scroll on desktop viewport', () => {});
  it('maintains responsive behavior across breakpoints', () => {});
  it('preserves existing functionality', () => {});
});

// Header integration tests
describe('Header Integration', () => {
  it('accommodates service switcher without layout issues', () => {});
  it('maintains theme toggle functionality', () => {});
  it('updates active states correctly', () => {});
});
```

### Visual Regression Tests
- Screenshot tests for homepage layout
- Theme switching visual validation
- Responsive design verification
- Hover state consistency

### Performance Tests
- Bundle size impact measurement
- Image loading performance
- Theme switching performance
- Layout shift measurement

---

## Browser Support

### Target Browsers
- **Chrome**: Latest 2 versions (primary)
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions (including iOS)
- **Edge**: Latest 2 versions

### Fallback Strategies
- **CSS Grid**: Flexbox fallback for older browsers
- **CSS Custom Properties**: Fallback values defined
- **Next.js Image**: Fallback to standard img tags
- **Theme Detection**: Default to light theme if detection fails

---

## Implementation Notes

### Development Sequence
1. **Phase 1**: Create icon components (MLogo, PhilipIcon)
2. **Phase 2**: Build ServiceNavigation with homepage variant and background media support
3. **Phase 3**: Add header variant and integration
4. **Phase 4**: Create About page and finalize

### Code Review Checklist
- [ ] TypeScript strict compliance (no `any` types)
- [ ] Proper error handling for asset loading
- [ ] Accessibility attributes complete
- [ ] Performance optimizations in place
- [ ] Test coverage adequate (>80%)
- [ ] Documentation updated

### Deployment Considerations
- Asset optimization pipeline configured
- CDN caching strategy for new assets
- Monitoring setup for performance regression
- Rollback plan documented and tested

This specification provides the complete technical foundation for implementing the Service Navigation enhancement while maintaining system integrity and performance standards.