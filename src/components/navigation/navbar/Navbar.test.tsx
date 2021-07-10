import { render, screen } from "@testing-library/react";
import { Position, positions } from "../../../types";
import { Navbar } from "./Navbar";

const getNavbar = () => screen.getByRole("navigation");

it("by default has unopinionated styling", () => {
  render(<Navbar />);
  expect(getNavbar()).toHaveClass("navbar", { exact: true });
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
