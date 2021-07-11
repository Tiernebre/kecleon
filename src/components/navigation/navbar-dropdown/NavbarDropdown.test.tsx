import { screen, render } from "@testing-library/react";
import { NavbarDropdown } from "./NavbarDropdown";

it("renders given children content", () => {
  const text = "Dropdown";
  render(<NavbarDropdown>{text}</NavbarDropdown>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("has unopinionated styling by default", () => {
  const text = "Dropdown";
  render(<NavbarDropdown>{text}</NavbarDropdown>);
  expect(screen.getByText(text)).toHaveClass("navbar-dropdown", {
    exact: true,
  });
});
