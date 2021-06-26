import { render, screen } from "@testing-library/react";
import { colors } from "../..";
import { Color, Size, sizes } from "../../types";
import { Input } from ".";

it.each<Color>(colors)("renders with color %p", (color: Color) => {
  render(<Input color={color} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass(`is-${color}`);
});

it.each<Size>(sizes)("renders in size %p", (size: Size) => {
  render(<Input size={size} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass(`is-${size}`);
});
