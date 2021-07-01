import { render, screen } from "@testing-library/react";
import { Color, colors, Size, sizes } from "../../types";
import { Tag } from "./Tag";

it("is displayed without opinionated styling by default", () => {
  const text = "Tag";
  render(<Tag>{text}</Tag>);
  expect(screen.getByText(text)).toHaveClass("tag", { exact: true });
});

it.each<Color>(colors)("can be displayed in color %p", (color: Color) => {
  const text = "Tag";
  render(<Tag color={color}>{text}</Tag>);
  expect(screen.getByText(text)).toHaveClass(`is-${color}`);
});

it.each<Size>(sizes)("can be displayed in size %p", (size: Size) => {
  const text = "Tag";
  render(<Tag size={size}>{text}</Tag>);
  expect(screen.getByText(text)).toHaveClass(`is-${size}`);
});

it("can display as rounded", () => {
  const text = "Tag";
  render(<Tag rounded>{text}</Tag>);
  expect(screen.getByText(text)).toHaveClass("is-rounded");
});

it("can display as not rounded if provided as false", () => {
  const text = "Tag";
  render(<Tag rounded={false}>{text}</Tag>);
  expect(screen.getByText(text)).not.toHaveClass("is-rounded");
});

it("can display as a delete button", () => {
  const text = "Tag";
  render(<Tag deletable>{text}</Tag>);
  expect(screen.getByText(text)).toHaveClass("is-delete");
});

it("won't display as a delete button if provided as false", () => {
  const text = "Tag";
  render(<Tag deletable={false}>{text}</Tag>);
  expect(screen.getByText(text)).not.toHaveClass("is-delete");
});
