import { screen, render, waitFor } from "@testing-library/react";
import { SmartNavbar } from "./SmartNavbar";
import user from "@testing-library/user-event";

const getNavbarBurger = () =>
  screen.getByRole("button", { name: "Navigation Menu Toggle" });

const getNavbarMenu = () => screen.getByRole("menu");

it("by default does not mark the hamburger and menu as being active", () => {
  render(<SmartNavbar />);
  expect(getNavbarBurger()).not.toHaveClass("is-active");
  expect(getNavbarMenu()).not.toHaveClass("is-active");
});

it("marks the hamburger and menu as being active when the hamburger menu is clicked once", async () => {
  render(<SmartNavbar />);
  user.click(getNavbarBurger());
  await waitFor(() => expect(getNavbarBurger()).toHaveClass("is-active"));
  await waitFor(() => expect(getNavbarMenu()).toHaveClass("is-active"));
});

it("marks the hamburger and menu as being inactive when the hamburger menu is clicked twice", async () => {
  render(<SmartNavbar />);
  user.click(getNavbarBurger());
  user.click(getNavbarBurger());
  await waitFor(() => expect(getNavbarBurger()).not.toHaveClass("is-active"));
  await waitFor(() => expect(getNavbarMenu()).not.toHaveClass("is-active"));
});
