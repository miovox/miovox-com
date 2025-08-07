# Frontend Architecture

## Component Architecture

- **Organization:** A standard `/src` layout with distinct folders for `/app` (routes), `/components` (ui, features), `/data`, and `/styles`.
- **Template:** All components will be typed functional components using React and TypeScript.
- **Navigation Pattern:** Unified `ServiceNavigation` component with variant-based rendering for consistent behavior across homepage and header contexts.

## State Management Architecture

State will be managed exclusively with built-in React Hooks (`useState`, `useContext`, `useTheme`, `usePathname`) to maintain simplicity for the MVP.

### Service Navigation State
- **Current Service Detection:** Uses `usePathname()` hook to automatically determine active service based on route
- **Service Icons:** Unified `ServiceIcon` component handles all pillar icons (Brain/Circuit, Camera, Home, Philip)
- **Background Media:** ServiceCard components support full-bleed images, textures, or videos with overlay gradients
- **Dropdown State:** Local component state for header dropdown open/close with click-outside detection
- **Responsive Icon Scaling:** ServiceIcon automatically scales from small (16px) to xxlarge (64px) based on viewport and context

## Routing Architecture

Routing is handled by the Next.js App Router, with URLs defined by the file system. URL-addressable modals will be implemented using Next.js's Intercepting Routes feature. All internal navigation uses the Next.js `<Link>` component for "app-style" client-side routing without full page reloads. 

### Service Navigation Routes
- **Products:** `/product` - AI Product Development ("Crafting Tools")
- **Events:** `/events` - Event Media Production ("Crafting Memories")  
- **Home Tech:** `/home` - Home Tech Solutions ("Crafting Lifestyles")
- **Info:** `/about` - About Philip ("It's This Guy")

Page transition animations (e.g., cross-fades) are a planned post-MVP enhancement.

## Frontend Services Layer

All data for the MVP will be imported directly from local TypeScript files.

### Service Configuration Service
Service definitions and navigation configuration centralized in `/src/data/services.ts` for consistency across homepage and header navigation variants.

---
