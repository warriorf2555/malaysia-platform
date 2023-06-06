import { render, screen } from "@testing-library/react";
import Showcase, { mockdata } from "~/landingPage/Showcase";

const CARD_TEST_ID = "card";

describe("Showcase Component", () => {
  it("it must render showcase title", () => {
    render(<Showcase />);

    expect(
      screen.getByText(/integrate effortlessly with any technology stack/i)
    ).toBeInTheDocument();
  });

  it("it must render the same numbers of card based on list of data", () => {
    render(<Showcase />);

    expect(screen.getAllByTestId(CARD_TEST_ID).length).toBe(mockdata.length);
  });

  it("it must have svg for every card element", () => {
    render(<Showcase />);

    const cards = screen.getAllByTestId(CARD_TEST_ID);

    for (const card of cards) {
      const svg = card.querySelector("svg");

      expect(svg).toBeInTheDocument();
    }
  });
});
