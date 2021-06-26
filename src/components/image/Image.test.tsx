import { screen, render } from "@testing-library/react";
import { Image } from "./Image";

it("is rounded if provided", () => {
  const alt = "Test Image";
  render(<Image alt={alt} rounded />);
  const image = screen.getByAltText(alt);
  expect(image.parentElement).toHaveClass("is-rounded");
});

it("is not rounded if provided as false", () => {
  const alt = "Test Image";
  render(<Image alt={alt} rounded={false} />);
  const image = screen.getByAltText(alt);
  expect(image.parentElement).not.toHaveClass("is-rounded");
});

it("is not rounded by default", () => {
  const alt = "Test Image";
  render(<Image alt={alt} />);
  const image = screen.getByAltText(alt);
  expect(image.parentElement).not.toHaveClass("is-rounded");
});
