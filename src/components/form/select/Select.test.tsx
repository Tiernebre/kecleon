import { render, screen } from "@testing-library/react";
import { Color, colors, Size, sizes } from "../../../types";
import { Select } from "./Select";

it("has unopinionated styling by default", () => {
  render(<Select />);
  const select = screen.getByRole("combobox");
  expect(select.parentElement).toHaveClass("select", { exact: true });
});

it.each<Color>(colors)("renders in color %p", (color: Color) => {
  render(<Select color={color} />);
  const select = screen.getByRole("combobox");
  expect(select.parentElement).toHaveClass(`is-${color}`);
});

it.each<Size>(sizes)("renders in size %p", (size: Size) => {
  render(<Select size={size} />);
  const select = screen.getByRole("combobox");
  expect(select.parentElement).toHaveClass(`is-${size}`);
});
