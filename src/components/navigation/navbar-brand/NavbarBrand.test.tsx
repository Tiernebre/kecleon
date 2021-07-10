import { screen, render } from "@testing-library/react";
import { NavbarBrand } from "./NavbarBrand";

it("renders given items", () => {
  const text = "NavbarBrand";
  render(<NavbarBrand items={text} />);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("renders given burger", () => {
  const text = "Burger";
  render(<NavbarBrand burger={text} />);
  expect(screen.getByText(text)).toBeInTheDocument();
});
