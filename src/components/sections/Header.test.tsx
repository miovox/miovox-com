import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import Header from "./Header";

// Mock ServiceNavigation component
vi.mock('../features/ServiceNavigation', () => ({
  ServiceNavigation: ({ variant }: any) => (
    <div data-testid={`service-navigation-${variant}`}>
      Service Navigation {variant}
    </div>
  )
}))

describe("Header", () => {
  test("renders header with logo", () => {
    render(<Header />);
    
    const logo = screen.getByAltText("Miovox");
    expect(logo).toBeInTheDocument();
  });

  test("logo links to homepage", () => {
    render(<Header />);
    
    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("has proper sticky positioning", () => {
    render(<Header />);
    
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("sticky", "top-0", "z-50");
  });

  test("has proper background and border", () => {
    render(<Header />);
    
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("bg-background", "border-b", "border-border");
  });

  test("renders ServiceNavigation with header variant", () => {
    render(<Header />);
    
    const serviceNavigation = screen.getByTestId("service-navigation-header");
    expect(serviceNavigation).toBeInTheDocument();
  });

  test("positions ServiceNavigation next to logo", () => {
    render(<Header />);
    
    const logoContainer = screen.getByRole("link");
    const serviceNavigation = screen.getByTestId("service-navigation-header");
    
    // Check they are in the same left-side container
    const leftContainer = logoContainer.parentElement;
    expect(leftContainer).toContainElement(serviceNavigation);
    expect(leftContainer).toHaveClass("flex", "items-center", "gap-1");
  });

  test("keeps ThemeToggle on the right side", () => {
    render(<Header />);
    
    // The header should have justify-between layout
    const headerContent = screen.getByRole("banner").querySelector("div > div");
    expect(headerContent).toHaveClass("flex", "items-center", "justify-between");
  });

  test("maintains minimal spacing between logo and service navigation", () => {
    render(<Header />);
    
    const logoLink = screen.getByRole("link");
    const leftContainer = logoLink.parentElement;
    
    expect(leftContainer).toHaveClass("gap-1");
  });
});