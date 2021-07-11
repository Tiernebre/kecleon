import { screen, render } from "@testing-library/react";
import { NavbarItemContainer } from "./NavbarItemContainer";

it("renders given children", () => {
  const content = "Navbar Item Container";
  render(<NavbarItemContainer>{content}</NavbarItemContainer>);
  expect(screen.getByText(content)).toBeInTheDocument();
});

it("is rendered with a given class", () => {
  const className = "some-custom-class";
  const content = "Navbar Item Container";
  render(
    <NavbarItemContainer className={className}>{content}</NavbarItemContainer>
  );
  expect(screen.getByText(content)).toHaveClass(className, { exact: true });
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

it("can be rendered without a dropdown", () => {
  const content = "Navbar Item Container";
  render(<NavbarItemContainer>{content}</NavbarItemContainer>);
  expect(screen.getByText(content)).not.toHaveClass("has-dropdown");
});

it("can be rendered with a dropdown up", () => {
  const dropdownText = "Test Dropdown";
  const dropdown = <div className="navbar-dropdown">{dropdownText}</div>;
  const content = "Navbar Item Container";
  render(
    <NavbarItemContainer dropdown={dropdown} dropdownUp>
      {content}
    </NavbarItemContainer>
  );
  expect(screen.getByText(content)).toHaveClass("has-dropdown-up");
});

it("can be rendered without a dropdown up", () => {
  const content = "Navbar Item Container";
  render(
    <NavbarItemContainer dropdownUp={false}>{content}</NavbarItemContainer>
  );
  expect(screen.getByText(content)).not.toHaveClass("has-dropdown-up");
});
