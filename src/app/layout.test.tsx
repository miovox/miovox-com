import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="test-child">Test content</div>
      </RootLayout>
    );

    expect(
      container.querySelector('[data-testid="test-child"]')
    ).toBeInTheDocument();
  });

  // it('applies Inter font class to body', () => {
  //   const { container } = render(
  //     <RootLayout>
  //       <div>Test</div>
  //     </RootLayout>
  //   );

  //   const body = container.querySelector('body');
  //   expect(body).toHaveClass();
  // });

  it("has correct metadata", () => {
    expect(metadata.title).toBe("Miovox");
    expect(metadata.description).toBe(
      "Crafting tools, memories, and lifestyles."
    );
  });
});
