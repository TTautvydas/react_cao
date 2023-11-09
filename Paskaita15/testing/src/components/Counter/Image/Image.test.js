import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image component", () => {
  it("should render image without any errors", () => {
    render(<Image />);
  });

  it("should render alt text when url is invalid", () => {
    render(<Image alt={"testing alt text"} />);

    const imageElement = screen.getByAltText("testing alt text");

    expect(imageElement.alt).toBe("testing alt text");
  });

  it("should contain valid src", () => {
    render(<Image src={"./photos/cat.jpg"} alt={"testing alt text"} />);

    const imageElement = screen.getByAltText("testing alt text");

    expect(imageElement.src).toContain("cat.jpg");
  });
});
