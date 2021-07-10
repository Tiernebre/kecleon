import { screen, render } from "@testing-library/react";
import { NavbarItemContainer } from "./NavbarItemContainer";

it("is rendered with unopinionated styling", () => {
  const content = "Navbar Item Container";
  render(<NavbarItemContainer>{content}</NavbarItemContainer>);
  expect(screen.getByText(content)).toHaveClass("navbar-item", { exact: true });
});
