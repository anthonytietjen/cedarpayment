import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextField from "../../src/app/components/TextField";
import { describe } from "node:test";
import { axe } from "jest-axe";

describe("TextField", () => {
  it("renders the textfield in default state", async () => {
    const labelText = "Hello World";
    const testId = "textfield-helloworld";

    const { container } = render(
      <TextField
        label={labelText}
        testId={testId}
        error=""
        name="my-textfield"
      />
    );

    // Renders a <label> html element for semantics
    const label = container.querySelector("label");
    expect(label).toHaveTextContent(labelText);

    // Renders a <input> html element for semantics
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders the textfield in valid state", async () => {
    const labelText = "Hello World";
    const testId = "textfield-helloworld";

    const { container } = render(
      <TextField
        label={labelText}
        testId={testId}
        error=""
        touched={true}
        name="my-textfield"
      />
    );

    // Renders a <label> html element for semantics
    const label = container.querySelector("label");
    expect(label).toHaveTextContent(labelText);

    // Renders a <input> html element for semantics
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();

    // Renders a <img> valid field indicator with alt text for accessibility
    const img = container.getElementsByTagName("img")[0];
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Valid field indicator");

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders the textfield in invalid state", async () => {
    const labelText = "Hello World";
    const testId = "textfield-helloworld";

    const { container } = render(
      <TextField
        label={labelText}
        testId={testId}
        error="Error here"
        touched={true}
        name="my-textfield"
      />
    );

    // Renders a <label> html element for semantics
    const label = container.querySelector("label");
    expect(label).toHaveTextContent(labelText);

    // Renders a <input> html element for semantics
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();

    // Renders a <img> valid field indicator with alt text for accessibility
    const img = container.getElementsByTagName("img")[0];
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Invalid field indicator");

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
