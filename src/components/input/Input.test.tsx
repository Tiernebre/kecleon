import { render, screen } from "@testing-library/react";
import { colors } from "../..";
import { Color, Size, sizes } from "../../types";
import { Input } from ".";

it("is entirely unopinionated if not given any props", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass("input", { exact: true });
});

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

it("is displayed as rounded if provided", () => {
  render(<Input rounded />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass("is-rounded");
});

it("is not displayed as rounded if provided as false", () => {
  render(<Input rounded={false} />);
  const input = screen.getByRole("textbox");
  expect(input).not.toHaveClass("is-rounded");
});
