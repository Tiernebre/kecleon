import { render, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";
import user from "@testing-library/user-event";
import { Color, colors, Size, sizes } from "../../../types";

it("displays without opinionated styling by default", () => {
  render(<Textarea />);
  expect(screen.getByRole("textbox")).toHaveClass("textarea", { exact: true });
});

it("displays a given placeholder", () => {
  const placeholder = "e.g. Hello World";
  render(<Textarea placeholder={placeholder} />);
  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
});

it("displays with the given amount of rows for height", () => {
  const rows = 10;
  render(<Textarea rows={rows} />);
  expect(screen.getByRole("textbox")).toHaveAttribute("rows", rows.toString());
});

it("can bind to a callback for events", () => {
  const onInput = jest.fn();
  render(<Textarea onInput={onInput} />);
  expect(onInput).not.toHaveBeenCalled();
  const textarea = screen.getByRole("textbox");
  user.type(textarea, "Hello World!");
  expect(onInput).toHaveBeenCalled();
});

it.each<Size>(sizes)("can render in size %p", (size: Size) => {
  render(<Textarea size={size} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveClass(`is-${size}`);
});

it.each<Color>(colors)("can render in color %p", (color: Color) => {
  render(<Textarea color={color} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveClass(`is-${color}`);
});

it("displays with fixed height if fixed is true", () => {
  render(<Textarea fixed />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveClass(`has-fixed-size`);
});

it("does not display with fixed height if fixed is false", () => {
  render(<Textarea fixed={false} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).not.toHaveClass(`has-fixed-size`);
});

it("can be marked as invalid", () => {
  render(<Textarea invalid />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeInvalid();
});

it("can be marked as valid", () => {
  render(<Textarea invalid={false} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeValid();
});

it("by default is valid", () => {
  render(<Textarea />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeValid();
});
