import { screen, render } from "@testing-library/react";
import { Direction, directions } from "../../../types";
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

it.each<Direction>(directions)(
  "can be rendered on the %p side",
  (direction: Direction) => {
    const text = "Dropdown";
    render(<NavbarDropdown direction={direction}>{text}</NavbarDropdown>);
    expect(screen.getByText(text)).toHaveClass(`is-${direction}`);
  }
);
