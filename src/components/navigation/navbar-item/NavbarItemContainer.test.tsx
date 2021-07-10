import { screen, render } from "@testing-library/react";
import { NavbarItemContainer } from "./NavbarItemContainer";

it("renders given children", () => {
  const content = "Navbar Item Container";
  render(<NavbarItemContainer>{content}</NavbarItemContainer>);
  expect(screen.getByText(content)).toBeInTheDocument();
});

it("is rendered with unopinionated styling", () => {
  const content = "Navbar Item Container";
  render(<NavbarItemContainer>{content}</NavbarItemContainer>);
  expect(screen.getByText(content)).toHaveClass("navbar-item", { exact: true });
});

it("can be rendered with a dropdown", () => {
  const dropdownText = "Test Dropdown";
  const dropdown = <div className="navbar-dropdown">{dropdownText}</div>;
  const content = "Navbar Item Container";
  render(
    <NavbarItemContainer dropdown={dropdown}>{content}</NavbarItemContainer>
  );
  expect(screen.getByText(content)).toHaveClass("has-dropdown");
  expect(screen.getByText(dropdownText)).toBeInTheDocument();
});
