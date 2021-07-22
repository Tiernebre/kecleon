import { screen, render } from "@testing-library/react";
import { DropdownItem } from "./DropdownItem";
import user from "@testing-library/user-event";

it("renders given text", () => {
  const text = "Dropdown Item";
  render(<DropdownItem>{text}</DropdownItem>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("can be active", () => {
  const text = "Dropdown Item";
  render(<DropdownItem active>{text}</DropdownItem>);
  expect(screen.getByText(text)).toHaveClass("is-link");
  expect(screen.getByText(text)).not.toHaveClass("is-white");
});

it("can be inactive", () => {
  const text = "Dropdown Item";
  render(<DropdownItem active={false}>{text}</DropdownItem>);
  expect(screen.getByText(text)).not.toHaveClass("is-link");
  expect(screen.getByText(text)).toHaveClass("is-white");
});

it("can bind to click event", () => {
  const text = "Dropdown Item";
  const onClick = jest.fn();
  render(<DropdownItem onClick={onClick}>{text}</DropdownItem>);
  user.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalled();
});
