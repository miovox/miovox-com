import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import Header from "./Header";

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
    expect(header).toHaveClass("bg-white", "border-b", "border-gray-200");
  });
});