import { render, screen } from "@testing-library/react";
import { Size, sizes } from "../../types";
import { Delete } from "./Delete";

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
