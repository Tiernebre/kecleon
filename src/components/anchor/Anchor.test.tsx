import { screen, render } from "@testing-library/react";
import { MemoryRouter, Switch } from "react-router";
import { Route } from "react-router-dom";
import { Anchor } from "./Anchor";
import user from "@testing-library/user-event";
import { axe } from "jest-axe";

const getLink = () => screen.getByRole("link");

it("is accessible", async () => {
  const className = "some-custom-srs-link";
  const href = "https://www.google.com";
  const { container } = render(
    <Anchor className={className} href={href}>
      Link
    </Anchor>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it("can be passed along traditional HTML attributes for single page routing", () => {
  const className = "some-custom-spa-link";
  render(
    <MemoryRouter>
      <Anchor className={className} to="some-custom-path">
        Link
      </Anchor>
    </MemoryRouter>
  );
  expect(getLink()).toHaveClass(className, { exact: true });
});

it("is rendered without opionated styling by default for server side routing", () => {
  const className = "some-custom-srs-link";
  const href = "https://www.google.com";
  render(
    <Anchor className={className} href={href}>
      Link
    </Anchor>
  );
  expect(getLink()).toHaveClass(className, { exact: true });
});

it("will single page route to an existing route in the page", async () => {
  const expectedRoutePath = "/test-route";
  const expectedRouteContent = "Expected Route";
  const unexpectedRouteContent = "Unexpected Route";
  render(
    <MemoryRouter>
      <Anchor to={expectedRoutePath}>Link</Anchor>
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
  render(<Anchor href={href}>Link</Anchor>);
  expect(getLink()).toHaveAttribute("href", href);
});

it("renders nothing if href or to are not provided", () => {
  render(<Anchor>Link</Anchor>);
  expect(screen.queryByRole("link")).toBeNull();
});
