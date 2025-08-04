import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import ProductPage from "./page";

describe("ProductPage", () => {
  test("renders page title correctly", () => {
    render(<ProductPage />);
    
    const title = screen.getByRole("heading", { name: /ai product development/i, level: 1 });
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle correctly", () => {
    render(<ProductPage />);
    
    const subtitle = screen.getByText(/crafting tools/i);
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveAttribute("role", "doc-subtitle");
  });

  test("renders service description", () => {
    render(<ProductPage />);
    
    const description = screen.getByText(/fusing world-class user experiences with cutting-edge ai technologies/i);
    expect(description).toBeInTheDocument();
  });

  test("renders coming soon section", () => {
    render(<ProductPage />);
    
    const comingSoon = screen.getByRole("heading", { name: /coming soon/i, level: 2 });
    expect(comingSoon).toBeInTheDocument();
    
    const placeholder = screen.getByText(/detailed service information and portfolio examples will be available here soon/i);
    expect(placeholder).toBeInTheDocument();
  });

  test("renders with proper semantic structure", () => {
    render(<ProductPage />);
    
    // Check for semantic elements
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    
    // Check that the page has proper structure with header, section, and aside
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.closest("header")).toBeInTheDocument();
  });

  test("renders site header on product page", () => {
    render(<ProductPage />);
    
    // Site header should be present on product page
    const headers = screen.getAllByRole("banner");
    expect(headers).toHaveLength(2); // Site header + page header
    
    // Header should contain logo linking to homepage
    const logoLink = screen.getByRole("link", { name: /miovox/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});