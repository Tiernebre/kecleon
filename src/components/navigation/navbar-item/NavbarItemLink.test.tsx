import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NavbarItemLink } from "./NavbarItemLink";

it("is rendered without opinionated styling by default", () => {
  const text = "NavbarItemLink";
  render(
    <MemoryRouter>
      <NavbarItemLink to="localhost">{text}</NavbarItemLink>
    </MemoryRouter>
  );
  expect(screen.getByText(text)).toHaveClass("navbar-item", { exact: true });
  expect(screen.getByText(text).nodeName).toEqual("A");
});
