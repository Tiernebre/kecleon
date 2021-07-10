import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NavbarItemLink } from "./NavbarItemLink";

it("is rendered without opinionated styling by default", () => {
  const text = "NavbarItemLink";
  render(
    <MemoryRouter>
      <NavbarItemLink to="some-custom-path">{text}</NavbarItemLink>
    </MemoryRouter>
  );
  const renderedLink = screen.getByText(text);
  expect(renderedLink).toHaveClass("navbar-item", { exact: true });
});

it("is rendered as a traditional anchor element tag if href is provided", () => {
  const text = "NavbarItemLink";
  const href = "https://www.google.com";
  render(
    <MemoryRouter>
      <NavbarItemLink href={href}>{text}</NavbarItemLink>
    </MemoryRouter>
  );
  const renderedLink = screen.getByText(text);
  expect(renderedLink).toHaveClass("navbar-item", { exact: true });
});
