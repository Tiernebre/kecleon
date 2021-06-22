import { render, screen } from "@testing-library/react";
import { Size, sizes } from "../../types";
import { Delete } from "./Delete";
import user from "@testing-library/user-event";

it.each<Size>(sizes)("renders in size %p when provided", (size: Size) => {
  render(<Delete size={size} label="Delete Test" />);
  const foundDelete = screen.getByRole("button");
  expect(foundDelete).toHaveClass(`is-${size}`);
});

it("binds an accessible label for screen readers", () => {
  const label = "Close the Notification";
  render(<Delete label={label} />);
  const foundDelete = screen.getByRole("button", { name: label });
  expect(foundDelete).toHaveAccessibleName(label);
});

it("supports normal button props", () => {
  const onClick = jest.fn();
  const type = "submit";
  const { rerender } = render(
    <Delete label="Label" onClick={onClick} type={type} />
  );
  const foundDelete = screen.getByRole("button");
  user.click(foundDelete);
  expect(onClick).toHaveBeenCalled();
  expect(foundDelete).toHaveAttribute("type", type);
  expect(foundDelete).toBeEnabled();
  rerender(<Delete label="Label" disabled />);
  const foundDisabledDelete = screen.getByRole("button");
  expect(foundDisabledDelete).toBeDisabled();
});
