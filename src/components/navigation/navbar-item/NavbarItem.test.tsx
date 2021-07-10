import { screen, render } from "@testing-library/react";
import { NavbarItem } from "./NavbarItem";

it("is rendered without opinionated styling by default", () => {
  const text = "NavbarItem";
  render(<NavbarItem>{text}</NavbarItem>);
  expect(screen.getByText(text)).toHaveClass("navbar-item", { exact: true });
});

it("can be a navigation link", () => {
  render(<NavbarItem link={{ href: "localhost" }} />);
  const navbarItem = screen.getByRole("link");
  expect(navbarItem.nodeName).toEqual("A");
});
