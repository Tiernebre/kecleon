import { render, screen } from "@testing-library/react";
import { NavbarBurger } from "./NavbarBurger";
import user from "@testing-library/user-event";

const getNavbarBurger = () =>
  screen.getByRole("button", { name: "Navigation Menu Toggle" });

it("behaves like a button", () => {
  const onClick = jest.fn();
  render(<NavbarBurger onClick={onClick} />);
  user.click(getNavbarBurger());
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("can be marked as active", () => {
  const onClick = jest.fn();
  render(<NavbarBurger onClick={onClick} active />);
  expect(getNavbarBurger()).toHaveClass("is-active");
});
