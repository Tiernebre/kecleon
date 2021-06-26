import { render, screen } from "@testing-library/react";
import { colors } from "../..";
import { Color } from "../../types";
import { Input } from ".";

it.each(colors)("renders with color %p", (color: Color) => {
  render(<Input color={color} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass(`is-${color}`);
});
