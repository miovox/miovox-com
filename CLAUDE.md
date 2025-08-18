# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development Server
- `pnpm dev` - Start Next.js development server on localhost:3000
- `pnpm build` - Build production version of the application
- `pnpm start` - Start production server

### Testing
- `pnpm test` - Run unit tests with Vitest
- `pnpm test:watch` - Run tests in watch mode for development
- `pnpm test:ui` - Open Vitest UI for interactive test management
- `pnpm e2e` - Open Cypress for end-to-end testing
- `pnpm e2e:headless` - Run E2E tests in headless mode

### Code Quality
- `pnpm lint` - Run ESLint to check code quality

### Package Management
- Uses `pnpm` as the preferred package manager
- Project requires Node.js 18+

## High-Level Architecture

### Platform & Deployment
- **Technology Stack**: Next.js 14 with React 18, TypeScript, Tailwind CSS
- **Architecture**: Jamstack (Static Site Generation)
- **Deployment**: Vercel platform with global CDN
- **Performance**: Pre-built static assets for optimal loading speed

### Project Structure
```
src/
├── app/           # Next.js App Router pages (/product, /events, /home, /about)
├── components/    # React components organized by purpose
│   ├── features/  # Business logic components (BrandPortal, ServiceNavigation, PortfolioGallery)
│   ├── sections/  # Page sections (Header, Footer, Hero)
│   ├── shared/    # Shared components across pages
│   ├── ui/        # UI primitives (ServiceIcon, Container, ThemeToggle)
│   ├── icons/     # Custom SVG icon components
│   └── providers/ # React context providers
├── data/          # TypeScript data definitions and configuration
└── test/          # Test setup and utilities
docs/              # Comprehensive project documentation
├── architecture/  # Technical architecture specifications
└── prd/           # Product requirements and planning
```

### Component Architecture Patterns

#### Service Navigation System
- **Central Config**: All service definitions in `src/data/services.ts`
- **Unified Navigation**: `ServiceNavigation` component handles both homepage grid and header dropdown
- **Service Types**: `'product' | 'events' | 'home' | 'about'` with consistent routing
- **Icon System**: `ServiceIcon` component with automatic light/dark theme switching
- **Responsive Design**: Icons scale from 16px to 64px based on context

#### Theme Integration
- **Theme Provider**: Uses `next-themes` for dark/light mode switching
- **Icon Assets**: Automatic SVG switching between `/icons/{service}-light.svg` and `/icons/{service}-dark.svg`
- **Color System**: Custom Tailwind colors with `miovox-blue` variants
- **Theme Detection**: Server-side rendering safe with hydration handling

#### State Management
- **React Hooks Only**: Uses `useState`, `useContext`, `useTheme`, `usePathname`
- **Route-Based State**: Current service determined automatically from URL path
- **Local State**: Component-level state for UI interactions (dropdown, modals)

### Testing Strategy
- **Unit Tests**: Vitest with jsdom environment for component testing
- **Testing Library**: React Testing Library for component interaction testing
- **E2E Tests**: Cypress for full user workflow testing
- **Test Location**: Co-located `.test.tsx` files next to components

### Path Alias Configuration
- `@/*` maps to `./src/*` for clean imports
- Configured in both `tsconfig.json` and `vitest.config.ts`

## Key Business Logic

### Service Pillar System
The application is organized around four service pillars:
1. **Products** (`/product`) - AI Product Development ("Crafting Tools")
2. **Events** (`/events`) - Event Media Production ("Crafting Memories")  
3. **Home Tech** (`/home`) - Home Tech Solutions ("Crafting Lifestyles")
4. **About** (`/about`) - Philip Jones profile ("Philip Jones")

### Brand Portal Pattern
- **Variant-Based Navigation**: Single component renders differently for homepage vs header
- **Brand Statement Navigation**: Header shows "Miovox [Service] ▼" pattern
- **Progressive Enhancement**: Works without JavaScript, enhanced with interactions

### Portfolio Integration
- Portfolio data structure supports images, videos, and case studies
- ServiceCard components support full-bleed background media with overlay gradients
- Gallery components designed for responsive image display

## Development Guidelines

### TypeScript Usage
- Strict TypeScript configuration enabled
- All components use typed functional component pattern
- Service types defined in `src/data/types.ts` and component files
- Path aliases configured for clean imports (`@/components`, `@/data`)

### Component Conventions
- Use functional components with TypeScript interfaces
- Co-locate component tests as `.test.tsx` files
- Follow existing naming patterns: PascalCase for components, camelCase for props
- Use `'use client'` directive only when client-side features are required

### Styling Approach
- Tailwind CSS for all styling with custom color system
- Responsive design using Tailwind breakpoints
- Theme-aware styling using CSS custom properties
- Component-scoped styling, avoid global CSS modifications