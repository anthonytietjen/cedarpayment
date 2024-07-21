import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from "../../src/app/components/Badge";
import { describe } from "node:test";
import { axe } from "jest-axe";

describe("Badge", () => {
  it("renders the badge", async () => {
    const text = "1";
    const testId = "button-1";
    const ariaLabel = "Step 1";

    const { container } = render(
      <Badge text={text} testId={testId} ariaLabel={ariaLabel} primary />
    );

    // Renders a <span> html element for semantics
    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();

    // Renders text
    expect(span).toHaveTextContent(text);

    // Test id is present
    expect(span).toHaveAttribute("data-testid", testId);

    // Aria label is present
    expect(span).toHaveAttribute("aria-label", ariaLabel);

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
