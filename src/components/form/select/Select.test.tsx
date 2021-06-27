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

it("can support selecting multiple", () => {
  render(<Select multiple />);
  const select = screen.getByRole("listbox");
  expect(select).toBeInTheDocument();
  expect(select.parentElement).toHaveClass("is-multiple");
});

it("can support selecting single (with multiple as false)", () => {
  render(<Select multiple={false} />);
  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
  expect(select.parentElement).not.toHaveClass("is-multiple");
});
