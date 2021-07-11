import { screen, render } from "@testing-library/react";
import { NavbarItem } from "./NavbarItem";

it("renders a link if link props are given", () => {
  const link = { href: "https://www.google.com" };
  render(<NavbarItem link={link}>Link</NavbarItem>);
  const navbarItem = screen.getByRole("link");
  expect(navbarItem).toBeInTheDocument();
  expect(navbarItem).toHaveAttribute("href", link.href);
  expect(navbarItem).toHaveClass("navbar-item", { exact: true });
});

it("renders a container if container props are given", () => {
  const container = { dropdown: <div></div> };
  const text = "Container";
  render(<NavbarItem container={container}>{text}</NavbarItem>);
  const navbarItem = screen.getByText(text);
  expect(navbarItem).toBeInTheDocument();
  expect(navbarItem.nodeName).toEqual("DIV");
  expect(navbarItem).toHaveClass("navbar-item");
});

it("renders a container even if no props are given at all", () => {
  const text = "Container";
  render(<NavbarItem>{text}</NavbarItem>);
  const navbarItem = screen.getByText(text);
  expect(navbarItem).toBeInTheDocument();
  expect(navbarItem.nodeName).toEqual("DIV");
  expect(navbarItem).toHaveClass("navbar-item", { exact: true });
});

it("can be expanded as a link", () => {
  const link = { href: "https://www.google.com" };
  render(
    <NavbarItem link={link} expanded>
      Link
    </NavbarItem>
  );
  const navbarItem = screen.getByRole("link");
  expect(navbarItem).toHaveClass("is-expanded");
});

it("can be expanded as a container", () => {
  const text = "Container";
  render(<NavbarItem expanded>{text}</NavbarItem>);
  const navbarItem = screen.getByText(text);
  expect(navbarItem).toHaveClass("is-expanded");
});
