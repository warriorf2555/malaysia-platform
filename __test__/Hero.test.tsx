import { render, screen } from "@testing-library/react";
import Hero from "~/pages/Hero";

describe("Hero Component", () => {
  it("it must have title", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        "Showcase Your Products and Shine: Welcome to Our Platform!"
      )
    ).toBeInTheDocument();
  });
});
