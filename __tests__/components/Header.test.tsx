import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../src/app/components/Header";
import { describe } from "node:test";
import { axe } from "jest-axe";

describe("Header", () => {
  it("renders the header with the logo", async () => {
    const { container } = render(<Header />);

    // Renders a <header> element for semantics
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();

    // Uses role of banner for accessibility
    expect(header).toHaveAttribute("role", "banner");

    // Renders alt tag on the logo for accessibility
    const logo = screen.getByAltText("ABC Health System Logo");
    expect(logo).toBeInTheDocument();

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
