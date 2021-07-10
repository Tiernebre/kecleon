import { screen, render } from "@testing-library/react";
import { NavbarItemLink } from "./NavbarItemLink";

it("is rendered without opinionated styling by default", () => {
  const text = "NavbarItemLink";
  render(<NavbarItemLink>{text}</NavbarItemLink>);
  expect(screen.getByText(text)).toHaveClass("navbar-item", { exact: true });
});
