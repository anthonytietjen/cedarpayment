import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageLayout from "../../src/app/components/PageLayout";
import { describe } from "node:test";
import { axe } from "jest-axe";

describe("Layout", () => {
  it("renders the layout", async () => {
    const { container } = render(
      <PageLayout>
        <div>Hello World</div>
      </PageLayout>
    );

    // Renders a <header> html element for semantics
    // See Header.test.txs for more in-depth tests
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();

    // Renders a <main> html element for semantics
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();

    // Accessibility check
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
