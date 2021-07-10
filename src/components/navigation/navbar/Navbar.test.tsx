import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

const getNavbar = () => screen.getByRole("navigation");

it("by default has unopinionated styling", () => {
  render(<Navbar />);
  expect(getNavbar()).toHaveClass("navbar", { exact: true });
});
