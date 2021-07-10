import { screen, render } from "@testing-library/react";
import { NavbarItem } from "./NavbarItem";

const getNavbarItem = () => screen.getByRole("link");

it("is rendered without opinionated styling by default", () => {
  render(<NavbarItem />);
  expect(getNavbarItem()).toHaveClass("navbar-item", { exact: true });
});
