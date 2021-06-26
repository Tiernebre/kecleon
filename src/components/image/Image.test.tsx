import { screen, render } from "@testing-library/react";
import { fixedImageSizes, Image, ImageFixedSize } from "./Image";

it("renders the provided image source", () => {
  const src =
    "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/25.png";
  const alt = "Pikachu";
  render(<Image alt={alt} src={src} />);
  const image = screen.getByAltText(alt);
  expect(image).toHaveAttribute("src", src);
  expect(image).toHaveAttribute("alt", alt);
});

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

it.each(fixedImageSizes)(
  "is rendered in fixed size with dimension %p",
  (fixedImageSize: ImageFixedSize) => {
    const alt = "Test Image";
    render(<Image alt={alt} fixedSize={fixedImageSize} />);
    const image = screen.getByAltText(alt);
    expect(image.parentElement).toHaveClass(
      `is-${fixedImageSize}x${fixedImageSize}`
    );
  }
);
