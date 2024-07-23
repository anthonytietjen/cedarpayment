import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LoadingSpinner from "../../src/app/components/LoadingSpinner";
import { describe } from "node:test";
import { axe } from "jest-axe";

describe("Button", () => {
  it("renders the button", async () => {
    const testId = "loading-spinner-helloworld";

    const { container } = render(<LoadingSpinner testId={testId} />);

    // Renders a <svg> html element
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    // Test id is present
    expect(svg).toHaveAttribute("data-testid", testId);

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
