import { screen, render, waitFor } from "@testing-library/react";
import { SmartNavbar } from "./SmartNavbar";
import user from "@testing-library/user-event";
import { Fragment } from "react";
import { NavbarItem } from "..";
import { Buttons, Button } from "../..";

const getNavbarBurger = () =>
  screen.getByRole("button", { name: "Navigation Menu Toggle" });

const getNavbarMenu = () => screen.getByRole("menu");

it("by default does not mark the hamburger and menu as being active", () => {
  render(<SmartNavbar />);
  expect(getNavbarBurger()).not.toHaveClass("is-active");
  expect(getNavbarMenu()).not.toHaveClass("is-active");
});

it("marks the hamburger and menu as being active when the hamburger menu is clicked once", async () => {
  render(<SmartNavbar />);
  user.click(getNavbarBurger());
  await waitFor(() => expect(getNavbarBurger()).toHaveClass("is-active"));
  await waitFor(() => expect(getNavbarMenu()).toHaveClass("is-active"));
});

it("marks the hamburger and menu as being inactive when the hamburger menu is clicked twice", async () => {
  render(<SmartNavbar />);
  user.click(getNavbarBurger());
  user.click(getNavbarBurger());
  await waitFor(() => expect(getNavbarBurger()).not.toHaveClass("is-active"));
  await waitFor(() => expect(getNavbarMenu()).not.toHaveClass("is-active"));
});

it("renders the given content in its slots", () => {
  render(
    <SmartNavbar
      brandItems={
        <NavbarItem link={{ href: "https://bulma.io" }}>
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Logo"
            width="112"
            height="28"
          />
        </NavbarItem>
      }
      menuStartItems={
        <Fragment>
          <NavbarItem link={{ href: "https://bulma.io" }}>Home</NavbarItem>
          <NavbarItem link={{ href: "https://bulma.io" }}>
            Documentation
          </NavbarItem>
        </Fragment>
      }
      menuEndItems={
        <NavbarItem>
          <Buttons>
            <Button color="primary">
              <strong>Sign up</strong>
            </Button>
            <Button color="light">Log in</Button>
          </Buttons>
        </NavbarItem>
      }
    />
  );
  expect(screen.getByAltText("Logo")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Documentation")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
});
