import { screen, render } from "@testing-library/react";
import { SmartNavbar } from "./SmartNavbar";

const getNavbarBurger = () =>
  screen.getByRole("button", { name: "Navigation Menu Toggle" });

const getNavbarMenu = () => screen.getByRole("menu");

it("by default does not mark the hamburger and menu as being active", () => {
  render(<SmartNavbar />);
  expect(getNavbarBurger()).not.toHaveClass("is-active");
  expect(getNavbarMenu()).not.toHaveClass("is-active");
});
