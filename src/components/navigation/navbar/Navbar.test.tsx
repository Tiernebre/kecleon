import { render, screen } from "@testing-library/react";
import { Color, colors, Position, positions } from "../../../types";
import { Navbar } from "./Navbar";

const getNavbar = () => screen.getByRole("navigation");

it("by default has unopinionated styling", () => {
  render(<Navbar />);
  expect(getNavbar()).toHaveClass("navbar", { exact: true });
});

it("renders given children", () => {
  const text = "Navbar Text";
  render(<Navbar>{text}</Navbar>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("can be rendered in transparent color", () => {
  render(<Navbar transparent />);
  expect(getNavbar()).toHaveClass("is-transparent");
});

it("can be rendered in non-transparent color", () => {
  render(<Navbar transparent={false} />);
  expect(getNavbar()).not.toHaveClass("is-transparent");
});

it.each<Position>(positions)(
  "can be fixed to the %p of the page",
  (position: Position) => {
    render(<Navbar fixed={position} />);
    expect(getNavbar()).toHaveClass(`is-fixed-${position}`);
  }
);

it.each<Color>(colors)("can be displayed in color %p", (color: Color) => {
  render(<Navbar color={color} />);
  expect(getNavbar()).toHaveClass(`is-${color}`);
});

it("can be displayed with a shadow", () => {
  render(<Navbar shadowed />);
  expect(getNavbar()).toHaveClass("has-shadow");
});

it("can be displayed without a shadow", () => {
  render(<Navbar shadowed={false} />);
  expect(getNavbar()).not.toHaveClass("has-shadow");
});
