import { screen, render } from "@testing-library/react";
import { NavbarItem } from "./NavbarItem";

it("renders a link if link props are given", () => {
  const link = { href: "https://www.google.com" };
  render(<NavbarItem link={link}>Link</NavbarItem>);
  const navbarItem = screen.getByRole("link");
  expect(navbarItem).toBeInTheDocument();
  expect(navbarItem).toHaveAttribute("href", link.href);
});
