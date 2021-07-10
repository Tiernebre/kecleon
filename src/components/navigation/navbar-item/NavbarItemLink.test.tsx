import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NavbarItemLink } from "./NavbarItemLink";

const getLink = () => screen.getByRole("link");

it("is rendered without opinionated styling by default for single page routing", () => {
  render(
    <MemoryRouter>
      <NavbarItemLink to="some-custom-path">Link</NavbarItemLink>
    </MemoryRouter>
  );
  expect(getLink()).toHaveClass("navbar-item", { exact: true });
});

it("is rendered without opionated styling by default for server side routing", () => {
  const href = "https://www.google.com";
  render(<NavbarItemLink href={href}>Link</NavbarItemLink>);
  expect(getLink()).toHaveClass("navbar-item", { exact: true });
});
