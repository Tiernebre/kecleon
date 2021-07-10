import { render, screen } from "@testing-library/react";
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
