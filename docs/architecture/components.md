# Components

## 1. Layout Components

- **`MainLayout`**: The top-level page wrapper, including `Header` and `Footer`.
- **`Container`**: Enforces the `max-width` and consistent padding for all page content.

## 2. Shared Components

- **`Card`**: Generic, reusable component providing the base style for service and portfolio cards.
- **`Header`**: Displays the subtle inline brand navigation ("Miovox [Service] ▼") and theme toggle with sophisticated layout hierarchy.
- **`Footer`**: The multi-column footer with brand info, navigation, and social links.

## 3. UI Components

- **`ServiceIcon`**: Unified service pillar icon component with variants for each mode:
  - **Products**: Brain/Circuit icon (AI Product Development)  
  - **Events**: Camera icon (Event Media Production)
  - **Home Tech**: Home icon (Smart Home Solutions)
  - **About**: Philip icon (philip.png, optimized <100KB)
  - Size variants: small (16px), medium (24px), large (32px), xlarge (48px), xxlarge (64px)
- **`ThemeToggle`**: Existing theme switching component (Light/Dark/System) positioned secondary to mode navigation.

## 4. Feature Components

- **`ServiceNavigation`**: **Single unified component** with variant-based rendering for consistent service behavior across contexts:
  - **Homepage variant** (`variant="homepage"`): 1×4 desktop grid (2×2 mobile) with rich visual tiles including hover states and sophisticated animations
  - **Header variant** (`variant="header"`): Subtle inline dropdown with "Miovox [Service] ▼" pattern and minimal visual weight
- **`PortfolioGallery`**: Displays a filtered grid of portfolio projects on service pages.
- **`PortfolioDetailModal`**: The URL-addressable modal for displaying detailed project content.
- **`InteractiveAbout`**: The component on the About page that manages the interactive hover effect.

## 5. Sub-Components (Internal to ServiceNavigation)

- **`ServiceCard`**: Individual homepage navigation tile with rich background media support:
  - **Background Media**: Full-bleed background image, texture, or video with stylized overlays
  - **Visual Hierarchy**: ServiceIcon (large/xlarge/xxlarge variants), service label, tagline over background
  - **Interactive States**: Sophisticated hover animations with background media transitions
  - **Responsive Scaling**: Icon and text sizing adapts to viewport (largest browsers get xxlarge icons)
- **`ServiceDropdown`**: Inline header dropdown with minimal visual treatment and backdrop blur menu (used within header variant).

## 6. Component Architecture

```typescript
// Single component with shared logic and variant-based rendering
interface ServiceNavigationProps {
  variant: 'homepage' | 'header';
  currentService?: ServiceId;
  className?: string;
}

// Shared service configuration and behavior
const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ variant, currentService }) => {
  // Shared: service data, navigation logic, state management
  const services = useServiceConfiguration();
  const handleServiceChange = useServiceNavigation();
  
  // Variant-specific rendering
  if (variant === 'homepage') {
    return <HomepageGrid services={services} onServiceChange={handleServiceChange} />;
  }
  
  if (variant === 'header') {
    return <ServiceDropdown services={services} currentService={currentService} onServiceChange={handleServiceChange} />;
  }
};
```

## 7. Deprecated Components

- **`BrandPortal`** *(Replaced by ServiceNavigation homepage variant)*: Previously arranged three service cards in staggered grid. Functionality migrated to new 1×4/2×2 grid system with enhanced interactivity.

---
