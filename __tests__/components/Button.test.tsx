import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../../src/app/components/Button";
import { describe } from "node:test";

describe("Button", () => {
  it("renders the button", () => {
    const labelText = "Hello World";
    const testId = "button-helloworld";

    const { container } = render(
      <Button handleClick={() => {}} label={labelText} testId={testId} />
    );

    // Renders a <button> html element for semantics
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();

    // Renders label text
    expect(button).toHaveTextContent(labelText);

    // Test id is present
    expect(button).toHaveAttribute("data-testid", testId);
  });
});
