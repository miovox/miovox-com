import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import AboutPage from "./page";

// Mock MainLayout component
vi.mock("@/components/ui/MainLayout", () => ({
  default: ({ children }: any) => <div data-testid="main-layout">{children}</div>
}));

// Mock Container component
vi.mock("@/components/ui/Container", () => ({
  default: ({ children }: any) => <div data-testid="container">{children}</div>
}));

// Mock ServiceIcon component
vi.mock("@/components/ui/ServiceIcon", () => ({
  ServiceIcon: ({ service, size, alt }: any) => (
    <div data-testid={`service-icon-${service}`} data-size={size} aria-label={alt}>
      {service} icon
    </div>
  )
}));

describe("AboutPage", () => {
  test("renders main layout and container", () => {
    render(<AboutPage />);
    
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  test("renders page heading", () => {
    render(<AboutPage />);
    
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("About Philip");
  });

  test("renders subtitle with personal branding", () => {
    render(<AboutPage />);
    
    const subtitle = screen.getByText("It's This Guy");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveAttribute("role", "doc-subtitle");
  });

  test("renders Philip's profile image prominently", () => {
    render(<AboutPage />);
    
    const profileIcon = screen.getByTestId("service-icon-about");
    expect(profileIcon).toBeInTheDocument();
    expect(profileIcon).toHaveAttribute("data-size", "xxlarge");
    expect(profileIcon).toHaveAttribute("aria-label", "Philip Jones");
  });

  test("renders personal introduction content", () => {
    render(<AboutPage />);
    
    expect(screen.getByText(/Hey there! I'm Philip Jones/)).toBeInTheDocument();
    expect(screen.getByText(/it's really just me, crafting solutions/)).toBeInTheDocument();
    expect(screen.getByText(/Let's create something amazing together/)).toBeInTheDocument();
  });

  test("renders service overview section", () => {
    render(<AboutPage />);
    
    const serviceHeading = screen.getByRole("heading", { level: 2 });
    expect(serviceHeading).toHaveTextContent("What I Do");
    
    // Check for service icons
    expect(screen.getByTestId("service-icon-products")).toBeInTheDocument();
    expect(screen.getByTestId("service-icon-events")).toBeInTheDocument();
    expect(screen.getByTestId("service-icon-home-tech")).toBeInTheDocument();
  });

  test("renders service descriptions", () => {
    render(<AboutPage />);
    
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Home Tech")).toBeInTheDocument();
    
    expect(screen.getByText(/AI-powered tools that solve real problems/)).toBeInTheDocument();
    expect(screen.getByText(/Capturing life's most important moments/)).toBeInTheDocument();
    expect(screen.getByText(/Smart home solutions that enhance your lifestyle/)).toBeInTheDocument();
  });

  test("has proper semantic structure", () => {
    render(<AboutPage />);
    
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    
    const header = article.querySelector("header");
    expect(header).toBeInTheDocument();
    
    const sections = article.querySelectorAll("section");
    expect(sections).toHaveLength(2); // Main content section + service overview section
  });

  test("has responsive layout classes", () => {
    render(<AboutPage />);
    
    const article = screen.getByRole("article");
    expect(article).toHaveClass("py-16", "md:py-24");
  });

  test("uses consistent spacing and typography", () => {
    render(<AboutPage />);
    
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-4xl", "md:text-5xl", "lg:text-6xl", "font-bold");
    
    const subtitle = screen.getByText("It's This Guy");
    expect(subtitle).toHaveClass("text-2xl", "md:text-3xl", "text-muted-foreground");
  });
});