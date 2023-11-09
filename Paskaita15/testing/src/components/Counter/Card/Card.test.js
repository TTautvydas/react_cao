import Card from "./Card";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Card component", () => {
  it("should render component without errors", () => {
    render(<Card />);
  });

  it("should render h4 without any errors", () => {
    render(<Card />);
    const h4Value = screen.getByTestId("headerTest").textContent;
    console.log(h4Value);
    expect(h4Value).toBe(
      '"This is a header text for the Card which should be long enough to take a lot of space and fit in one paragraph"'
    );
  });
  it("should redirect to external page when the button is clicked", () => {
    render(<Card />);

    const redirectButton = screen.getByRole("button", {
      name: "View on Twitter",
    });
    expect(redirectButton).toHaveAttribute("a", "https://twitter.com");
  });
});
