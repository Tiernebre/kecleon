import { render, screen } from "@testing-library/react";
import { Color } from "../../../types";
import { ValidatedInput } from "./ValidatedInput";
import user from "@testing-library/user-event";

const getInput = () => screen.getByRole("textbox");

it("renders in danger color if invalid", () => {
  render(<ValidatedInput valid={false} />);
  expect(getInput()).toHaveClass("is-danger");
});

it.each<Color>(["success", "warning", "primary"])(
  "overrides using danger if color prop = %p if and is invalid",
  (originalColor: Color) => {
    render(<ValidatedInput valid={false} color={originalColor} />);
    const input = getInput();
    expect(input).toHaveClass("is-danger");
    expect(input).not.toHaveClass(`is-${originalColor}`);
  }
);

it.each<Color>(["success", "warning", "primary"])(
  "does not overrides color prop = %p if valid",
  (originalColor: Color) => {
    render(<ValidatedInput valid={true} color={originalColor} />);
    const input = getInput();
    expect(input).not.toHaveClass("is-danger");
    expect(input).toHaveClass(`is-${originalColor}`);
  }
);

it("is marked accessibly as invalid if invalid", () => {
  render(<ValidatedInput valid={false} />);
  expect(getInput()).toBeInvalid();
});

it("is marked accessibly as valid if valid", () => {
  render(<ValidatedInput valid={true} />);
  expect(getInput()).toBeValid();
});

it("still allows for regular input props", () => {
  const type = "text";
  const onInput = jest.fn();
  render(<ValidatedInput valid type={type} onInput={onInput} />);
  expect(onInput).not.toHaveBeenCalled();
  const input = getInput();
  expect(input).toHaveAttribute("type", type);
  user.type(input, "Hello World!");
  expect(onInput).toHaveBeenCalled();
});