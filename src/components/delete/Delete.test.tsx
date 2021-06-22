import { render, screen } from "@testing-library/react";
import { Size, sizes } from "../../types";
import { Delete } from "./Delete";

it.each<Size>(sizes)("renders in size %p when provided", (size: Size) => {
  render(<Delete size={size} />);
  const foundDelete = screen.getByRole("button");
  expect(foundDelete).toHaveClass(`is-${size}`);
});
