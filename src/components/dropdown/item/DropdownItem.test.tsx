import { screen, render } from "@testing-library/react";
import { DropdownItem } from "./DropdownItem";

it("renders given text", () => {
  const text = "Dropdown Item";
  render(<DropdownItem>{text}</DropdownItem>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("can be active", () => {
  const text = "Dropdown Item";
  render(<DropdownItem active>{text}</DropdownItem>);
  expect(screen.getByText(text)).toHaveClass("is-active");
});

it("can be inactive", () => {
  const text = "Dropdown Item";
  render(<DropdownItem active={false}>{text}</DropdownItem>);
  expect(screen.getByText(text)).not.toHaveClass("is-active");
});
