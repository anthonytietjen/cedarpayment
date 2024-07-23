import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../../src/app/components/Button";
import { describe } from "node:test";
import { axe } from "jest-axe";

describe("Button", () => {
  it("renders the button", async () => {
    const buttonText = "Hello World";
    const testId = "button-helloworld";

    const { container } = render(
      <Button onClick={() => {}} testId={testId}>
        {buttonText}
      </Button>
    );

    // Renders a <button> html element for semantics
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();

    // Renders label text
    expect(button).toHaveTextContent(buttonText);

    // Test id is present
    expect(button).toHaveAttribute("data-testid", testId);

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
