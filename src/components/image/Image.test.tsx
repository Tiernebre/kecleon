import { screen, render } from "@testing-library/react";
import { Image } from "./Image";

it("is rounded if provided", () => {
  const alt = "Test Image";
  render(<Image alt={alt} rounded />);
  const image = screen.getByAltText(alt);
  expect(image.parentElement).toHaveClass("is-rounded");
});
