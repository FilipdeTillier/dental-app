import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Header from "@/components/Header/Header";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByTestId("header");

    expect(heading).toBeInTheDocument();
  });
});
