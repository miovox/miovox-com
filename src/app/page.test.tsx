import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home Page", () => {
  it("renders Miovox brand logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Miovox")).toBeInTheDocument();
  });

  it("renders brand tagline", () => {
    render(<Home />);
    expect(
      screen.getByText("Crafting tools, memories, and lifestyles.")
    ).toBeInTheDocument();
  });

  it("renders Studios text with chevron", () => {
    render(<Home />);
    expect(screen.getByText("Studios")).toBeInTheDocument();
  });

  it("renders three service cards", () => {
    render(<Home />);
    expect(screen.getByText("AI Product Development")).toBeInTheDocument();
    expect(screen.getByText("Home Tech Solutions")).toBeInTheDocument();
    expect(screen.getByText("Event Media Production")).toBeInTheDocument();
  });

  it("renders service subheadlines", () => {
    render(<Home />);
    expect(screen.getByText("Crafting Tools")).toBeInTheDocument();
    expect(screen.getByText("Crafting Lifestyles")).toBeInTheDocument();
    expect(screen.getByText("Crafting Memories")).toBeInTheDocument();
  });

  it("renders service descriptions", () => {
    render(<Home />);
    expect(
      screen.getByText(
        /Fusing world-class user experiences with cutting-edge AI technologies to bring your vision to life/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Transforming your home with expertly designed technology systems that enhance daily life/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Capturing moments with a keen approach to storytelling and memory preservation/
      )
    ).toBeInTheDocument();
  });

  it("renders footer with copyright", () => {
    render(<Home />);
    expect(screen.getByText("© 2025 Miovox LLC")).toBeInTheDocument();
  });

  it("renders footer navigation links", () => {
    render(<Home />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
