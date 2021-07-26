import { render, screen } from "@testing-library/react";
import { Color, colors, Size, sizes } from "../../../types";
import { Select } from "./Select";
import user from "@testing-library/user-event";

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

it("invokes a callback when a user changes their selected option", () => {
  const onChange = jest.fn();
  render(
    <Select onChange={onChange}>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </Select>
  );
  expect(onChange).not.toHaveBeenCalled();
  expect(
    (screen.getByRole("option", { name: "B" }) as HTMLOptionElement).selected
  ).toBe(false);
  user.selectOptions(screen.getByRole("combobox"), ["B"]);
  expect(
    (screen.getByRole("option", { name: "A" }) as HTMLOptionElement).selected
  ).toBe(false);
  expect(
    (screen.getByRole("option", { name: "B" }) as HTMLOptionElement).selected
  ).toBe(true);
  expect(
    (screen.getByRole("option", { name: "C" }) as HTMLOptionElement).selected
  ).toBe(false);
  expect(onChange).toHaveBeenCalledTimes(1);
});

it("can be marked as invalid", () => {
  render(<Select invalid />);
  expect(screen.getByRole("combobox")).toBeInvalid();
});

it("can be marked as valid", () => {
  render(<Select invalid={false} />);
  expect(screen.getByRole("combobox")).toBeValid();
});

it("by default is valid", () => {
  render(<Select />);
  expect(screen.getByRole("combobox")).toBeValid();
});

it("can be marked as being described by another element", () => {
  const describedBy = "some-element";
  render(<Select describedBy={describedBy} />);
  expect(screen.getByRole("combobox")).toHaveAttribute(
    "aria-describedby",
    describedBy
  );
});

it("can have an id passed to it", () => {
  const id = "some-select";
  render(<Select id={id} />);
  expect(screen.getByRole("combobox")).toHaveAttribute("id", id);
});
