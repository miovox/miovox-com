import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  test("renders page title correctly", () => {
    render(<HomePage />);
    
    const title = screen.getByRole("heading", { name: /home tech solutions/i, level: 1 });
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle correctly", () => {
    render(<HomePage />);
    
    const subtitle = screen.getByText(/crafting lifestyles/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveAttribute("role", "doc-subtitle");
  });

  test("renders service description", () => {
    render(<HomePage />);
    
    const description = screen.getByText(/transforming your home with expertly designed technology systems/i);
    expect(description).toBeInTheDocument();
  });

  test("renders portfolio section with proper heading", () => {
    render(<HomePage />);
    
    const portfolioHeading = screen.getByRole("heading", { name: /featured homes/i, level: 2 });
    expect(portfolioHeading).toBeInTheDocument();
  });

  test("renders PortfolioGallery component", () => {
    render(<HomePage />);
    
    // The gallery should be present (we can check for the grid container or project cards)
    // Since we have Home projects in our data, they should render
    const projectTitles = screen.getAllByText(/intelligent lighting automation|advanced home security system/i);
    expect(projectTitles.length).toBeGreaterThan(0);
  });

  test("displays only Home category projects", () => {
    render(<HomePage />);
    
    // Check that we have Home projects visible
    expect(screen.getByText(/intelligent lighting automation/i)).toBeInTheDocument();
    expect(screen.getByText(/advanced home security system/i)).toBeInTheDocument();
    
    // Check that non-Home projects are not visible
    expect(screen.queryByText(/smart voice assistant integration/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/interactive conference platform/i)).not.toBeInTheDocument();
  });

  test("portfolio gallery does not show category filters", () => {
    render(<HomePage />);
    
    // Category filter buttons should not be present since showFilters={false}
    // Check specifically for button elements with these text labels
    expect(screen.queryByRole('button', { name: /all projects/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^products$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /homes/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /events/i })).not.toBeInTheDocument();
  });

  test("maintains existing page metadata and layout", () => {
    render(<HomePage />);
    
    // Verify essential page elements are still present
    const mainHeading = screen.getByRole("heading", { name: /home tech solutions/i, level: 1 });
    expect(mainHeading).toBeInTheDocument();
    
    const description = screen.getByText(/transforming your home with expertly designed technology systems/i);
    expect(description).toBeInTheDocument();
    
    // Verify semantic structure is maintained
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  test("renders with proper semantic structure", () => {
    render(<HomePage />);
    
    // Check for semantic elements
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    
    // Check that the page has proper structure with header, section, and aside
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.closest("header")).toBeInTheDocument();
  });

  test("renders site header on home page", () => {
    render(<HomePage />);
    
    // Site header should be present on home page
    const headers = screen.getAllByRole("banner");
    expect(headers).toHaveLength(2); // Site header + page header
    
    // Header should contain logo linking to homepage
    const logoLink = screen.getByRole("link", { name: /miovox/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});