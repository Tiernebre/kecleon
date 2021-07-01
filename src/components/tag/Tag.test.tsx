import { render, screen } from "@testing-library/react";
import { Color, colors } from "../../types";
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
