import { render, screen } from "@testing-library/react";
import { Color, colors, Size, sizes } from "../../types";
import { Tag } from "./Tag";
import user from "@testing-library/user-event";

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

it("can be provided normal span attributes", () => {
  const text = "Tag";
  const className = "test-class";
  const onClick = jest.fn();
  render(
    <Tag className={className} onClick={onClick}>
      {text}
    </Tag>
  );
  const tag = screen.getByText(text);
  expect(tag).toHaveClass(className);
  expect(onClick).not.toHaveBeenCalled();
  user.click(tag);
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("can have additional class names added", () => {
  const className = "some-additional class-tag-name";
  const text = "Tag";
  render(<Tag className={className}>{text}</Tag>);
  expect(screen.getByText(text)).toHaveClass(
    "tag",
    "some-additional",
    "class-tag-name"
  );
});
