import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ProductPage from "./page";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>
  );
};

describe("ProductPage", () => {
  test("renders page title correctly", () => {
    renderWithProviders(<ProductPage />);
    
    const title = screen.getByRole("heading", { name: /ai product development/i, level: 1 });
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle correctly", () => {
    renderWithProviders(<ProductPage />);
    
    const subtitle = screen.getByRole("doc-subtitle");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(/crafting tools/i);
  });

  test("renders service description", () => {
    renderWithProviders(<ProductPage />);
    
    const description = screen.getByText(/fusing world-class user experiences with cutting-edge ai technologies/i);
    expect(description).toBeInTheDocument();
  });

  test("renders portfolio section with proper heading", () => {
    renderWithProviders(<ProductPage />);
    
    const portfolioHeading = screen.getByRole("heading", { name: /featured products/i, level: 2 });
    expect(portfolioHeading).toBeInTheDocument();
  });

  test("renders PortfolioGallery component", () => {
    renderWithProviders(<ProductPage />);
    
    // The gallery should be present (we can check for the grid container or project cards)
    // Since we have Product projects in our data, they should render
    const projectTitles = screen.getAllByText(/smart voice assistant integration|predictive analytics dashboard/i);
    expect(projectTitles.length).toBeGreaterThan(0);
  });

  test("displays only Product category projects", () => {
    renderWithProviders(<ProductPage />);
    
    // Check that we have Product projects visible
    expect(screen.getByText(/smart voice assistant integration/i)).toBeInTheDocument();
    expect(screen.getByText(/predictive analytics dashboard/i)).toBeInTheDocument();
    
    // Check that non-Product projects are not visible
    expect(screen.queryByText(/intelligent lighting automation/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/interactive conference platform/i)).not.toBeInTheDocument();
  });

  test("portfolio gallery does not show category filters", () => {
    renderWithProviders(<ProductPage />);
    
    // Category filter buttons should not be present since showFilters={false}
    // Check specifically for button elements with these text labels
    expect(screen.queryByRole('button', { name: /all projects/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^products$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /homes/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /events/i })).not.toBeInTheDocument();
  });

  test("maintains existing page metadata and layout", () => {
    renderWithProviders(<ProductPage />);
    
    // Verify essential page elements are still present
    const mainHeading = screen.getByRole("heading", { name: /ai product development/i, level: 1 });
    expect(mainHeading).toBeInTheDocument();
    
    const description = screen.getByText(/fusing world-class user experiences/i);
    expect(description).toBeInTheDocument();
    
    // Verify semantic structure is maintained
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  test("renders with proper semantic structure", () => {
    renderWithProviders(<ProductPage />);
    
    // Check for semantic elements
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    
    // Check that the page has proper structure with header, section, and aside
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.closest("header")).toBeInTheDocument();
  });

  test("renders site header on product page", () => {
    renderWithProviders(<ProductPage />);
    
    // Site header should be present on product page
    const headers = screen.getAllByRole("banner");
    expect(headers).toHaveLength(2); // Site header + page header
    
    // Header should contain logo linking to homepage
    const logoLink = screen.getByRole("link", { name: /miovox/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});