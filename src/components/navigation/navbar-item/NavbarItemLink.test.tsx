import { screen, render } from "@testing-library/react";
import { MemoryRouter, Switch } from "react-router";
import { Route } from "react-router-dom";
import { NavbarItemLink } from "./NavbarItemLink";
import user from "@testing-library/user-event";

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

it("will single page route to an existing route in the page", async () => {
  const expectedRoutePath = "/test-route";
  const expectedRouteContent = "Expected Route";
  const unexpectedRouteContent = "Unexpected Route";
  render(
    <MemoryRouter>
      <NavbarItemLink to={expectedRoutePath}>Link</NavbarItemLink>
      <Switch>
        <Route exact path="/">
          Default
        </Route>
        <Route path={expectedRoutePath}>{expectedRouteContent}</Route>
        <Route path="/some-other-route">{unexpectedRouteContent}</Route>
      </Switch>
    </MemoryRouter>
  );
  user.click(getLink());
  await screen.findByText(expectedRouteContent);
  expect(screen.getByText(expectedRouteContent)).toBeInTheDocument();
  expect(screen.queryByText(unexpectedRouteContent)).toBeNull();
});

it("will server side route to an external page", () => {
  const href = "https://www.google.com";
  render(<NavbarItemLink href={href}>Link</NavbarItemLink>);
  expect(getLink()).toHaveAttribute("href", href);
});
