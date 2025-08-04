# Frontend Architecture

## Component Architecture

- **Organization:** A standard `/src` layout with distinct folders for `/app` (routes), `/components` (ui, shared, features), `/data`, and `/styles`.
- **Template:** All components will be typed functional components using React and TypeScript.

## State Management Architecture

State will be managed exclusively with built-in React Hooks (`useState`, `useContext`) to maintain simplicity for the MVP.

## Routing Architecture

Routing is handled by the Next.js App Router, with URLs defined by the file system. URL-addressable modals will be implemented using Next.js's Intercepting Routes feature. All internal navigation uses the Next.js `<Link>` component for "app-style" client-side routing without full page reloads. Page transition animations (e.g., cross-fades) are a planned post-MVP enhancement.

## Frontend Services Layer

All data for the MVP will be imported directly from local TypeScript files.

---
