import { render, screen } from "@testing-library/react";
import { Color } from "../../../types";
import { ValidatedInput } from "./ValidatedInput";

const getInput = () => screen.getByRole("textbox");

it("renders in danger color if invalid", () => {
  render(<ValidatedInput valid={false} />);
  expect(getInput()).toHaveClass("is-danger");
});

it.each<Color>(["success", "warning", "primary"])(
  "overrides color prop = %p if invalid to be danger",
  (originalColor: Color) => {
    render(<ValidatedInput valid={false} color={originalColor} />);
    const input = getInput();
    expect(input).toHaveClass("is-danger");
    expect(input).not.toHaveClass(`is-${originalColor}`);
  }
);
