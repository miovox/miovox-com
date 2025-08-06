import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import EventsPage from "./page";

describe("EventsPage", () => {
  test("renders page title correctly", () => {
    render(<EventsPage />);
    
    const title = screen.getByRole("heading", { name: /event media production/i, level: 1 });
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle correctly", () => {
    render(<EventsPage />);
    
    const subtitle = screen.getByText(/crafting memories/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveAttribute("role", "doc-subtitle");
  });

  test("renders service description", () => {
    render(<EventsPage />);
    
    const description = screen.getByText(/capturing moments with a keen approach to storytelling and memory preservation/i);
    expect(description).toBeInTheDocument();
  });

  test("renders portfolio section with proper heading", () => {
    render(<EventsPage />);
    
    const portfolioHeading = screen.getByRole("heading", { name: /featured events/i, level: 2 });
    expect(portfolioHeading).toBeInTheDocument();
  });

  test("renders PortfolioGallery component", () => {
    render(<EventsPage />);
    
    // The gallery should be present (we can check for the grid container or project cards)
    // Since we have Event projects in our data, they should render
    const projectTitles = screen.getAllByText(/interactive conference platform|smart venue management system/i);
    expect(projectTitles.length).toBeGreaterThan(0);
  });

  test("displays only Event category projects", () => {
    render(<EventsPage />);
    
    // Check that we have Event projects visible
    expect(screen.getByText(/interactive conference platform/i)).toBeInTheDocument();
    expect(screen.getByText(/smart venue management system/i)).toBeInTheDocument();
    
    // Check that non-Event projects are not visible
    expect(screen.queryByText(/smart voice assistant integration/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/intelligent lighting automation/i)).not.toBeInTheDocument();
  });

  test("portfolio gallery does not show category filters", () => {
    render(<EventsPage />);
    
    // Category filter buttons should not be present since showFilters={false}
    // Check specifically for button elements with these text labels
    expect(screen.queryByRole('button', { name: /all projects/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^products$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /homes/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /events/i })).not.toBeInTheDocument();
  });

  test("maintains existing page metadata and layout", () => {
    render(<EventsPage />);
    
    // Verify essential page elements are still present
    const mainHeading = screen.getByRole("heading", { name: /event media production/i, level: 1 });
    expect(mainHeading).toBeInTheDocument();
    
    const description = screen.getByText(/capturing moments with a keen approach to storytelling/i);
    expect(description).toBeInTheDocument();
    
    // Verify semantic structure is maintained
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  test("renders with proper semantic structure", () => {
    render(<EventsPage />);
    
    // Check for semantic elements
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    
    // Check that the page has proper structure with header, section, and aside
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.closest("header")).toBeInTheDocument();
  });

  test("renders site header on events page", () => {
    render(<EventsPage />);
    
    // Site header should be present on events page
    const headers = screen.getAllByRole("banner");
    expect(headers).toHaveLength(2); // Site header + page header
    
    // Header should contain logo linking to homepage
    const logoLink = screen.getByRole("link", { name: /miovox/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});