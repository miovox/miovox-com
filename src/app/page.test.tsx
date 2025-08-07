import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Home from "./page";

// Mock components for isolated testing
vi.mock('../components/ui/MainLayout', () => ({
  default: ({ children, showHeader }: any) => (
    <div data-testid="main-layout" data-show-header={showHeader}>
      {children}
    </div>
  )
}))

vi.mock('../components/sections/Hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('../components/features/ServiceNavigation', () => ({
  default: ({ variant }: any) => (
    <div data-testid="service-navigation" data-variant={variant} role="navigation">
      Service Navigation
    </div>
  )
}))

// Mock window dimensions for viewport height tests
const mockResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn()
}))

beforeEach(() => {
  global.ResizeObserver = mockResizeObserver
  // Set default desktop viewport size
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 1080
  })
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1920
  })
})

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
  });

  it("uses MainLayout with showHeader=false", () => {
    render(<Home />);
    
    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toHaveAttribute('data-show-header', 'false');
  });

  it("renders Hero component in 70vh container", () => {
    render(<Home />);
    
    const hero = screen.getByTestId('hero');
    expect(hero).toBeInTheDocument();
    
    const heroContainer = hero.parentElement;
    expect(heroContainer).toHaveClass('h-[60vh]', 'md:h-[65vh]', 'xl:h-[70vh]', 'flex-shrink-0');
  });

  it("renders ServiceNavigation with homepage variant", () => {
    render(<Home />);
    
    const serviceNav = screen.getByTestId('service-navigation');
    expect(serviceNav).toBeInTheDocument();
    expect(serviceNav).toHaveAttribute('data-variant', 'homepage');
  });

  it("has proper layout structure for no-scroll behavior", () => {
    render(<Home />);
    
    const layoutContainer = screen.getByTestId('main-layout').firstChild;
    expect(layoutContainer).toHaveClass('min-h-screen', 'flex', 'flex-col');
  });

  it("ensures no-scroll layout on standard desktop screens", () => {
    // Test 1920x1080 viewport
    Object.defineProperty(window, 'innerHeight', { value: 1080, configurable: true });
    Object.defineProperty(window, 'innerWidth', { value: 1920, configurable: true });
    
    render(<Home />);
    
    const heroContainer = screen.getByTestId('hero').parentElement;
    const serviceNavContainer = screen.getByTestId('service-navigation').parentElement;
    
    // Hero takes 70vh, ServiceNav takes 30vh = 100vh total (no scroll needed)
    expect(heroContainer).toHaveClass('xl:h-[70vh]');
    expect(serviceNavContainer).toHaveClass('flex-shrink-0');
  });

  it("ensures no-scroll layout on 1440x900 viewport", () => {
    // Test 1440x900 viewport
    Object.defineProperty(window, 'innerHeight', { value: 900, configurable: true });
    Object.defineProperty(window, 'innerWidth', { value: 1440, configurable: true });
    
    render(<Home />);
    
    const container = screen.getByTestId('main-layout').firstChild;
    expect(container).toHaveClass('min-h-screen');
  });

  it("has responsive height behavior for tablet", () => {
    // Test tablet viewport 
    Object.defineProperty(window, 'innerHeight', { value: 1024, configurable: true });
    Object.defineProperty(window, 'innerWidth', { value: 768, configurable: true });
    
    render(<Home />);
    
    const heroContainer = screen.getByTestId('hero').parentElement;
    expect(heroContainer).toHaveClass('md:h-[65vh]');
  });

  it("has responsive height behavior for mobile", () => {
    // Test mobile viewport
    Object.defineProperty(window, 'innerHeight', { value: 667, configurable: true });
    Object.defineProperty(window, 'innerWidth', { value: 375, configurable: true });
    
    render(<Home />);
    
    const heroContainer = screen.getByTestId('hero').parentElement;
    expect(heroContainer).toHaveClass('h-[60vh]');
  });

  it("maintains accessibility with navigation role", () => {
    render(<Home />);
    
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it("does not render header on homepage", () => {
    render(<Home />);
    
    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toHaveAttribute('data-show-header', 'false');
  });

  it("has flex-shrink-0 on both sections to prevent layout shifts", () => {
    render(<Home />);
    
    const heroContainer = screen.getByTestId('hero').parentElement;
    const serviceNavContainer = screen.getByTestId('service-navigation').parentElement;
    
    expect(heroContainer).toHaveClass('flex-shrink-0');
    expect(serviceNavContainer).toHaveClass('flex-shrink-0');
  });
});
