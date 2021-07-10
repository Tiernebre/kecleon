import { screen, render } from "@testing-library/react";
import { NavbarBrand } from "./NavbarBrand";

it("renders given children", () => {
  const text = "NavbarBrand";
  render(<NavbarBrand>{text}</NavbarBrand>);
  expect(screen.getByText(text)).toEqual(true);
});
