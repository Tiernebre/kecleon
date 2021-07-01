import { render, screen } from "@testing-library/react";
import { Size, sizes } from "../../types";
import { Tag } from "../tag/Tag";
import { Tags } from "./Tags";

it("renders given children", () => {
  const firstTag = "Test Tag 1";
  const secondTag = "Test Tag 2";
  render(
    <Tags>
      <Tag>{firstTag}</Tag>
      <Tag>{secondTag}</Tag>
    </Tags>
  );
  expect(screen.getByText(firstTag)).toBeInTheDocument();
  expect(screen.getByText(secondTag)).toBeInTheDocument();
});

it("by default is unopinionated in its styling", () => {
  const tag = "Test Tag 1";
  render(
    <Tags>
      <Tag>{tag}</Tag>
    </Tags>
  );
  expect(screen.getByText(tag).parentElement).toHaveClass("tags", {
    exact: true,
  });
});

it.each<Size>(sizes)(
  "can render its nested tags with size = %p",
  (size: Size) => {
    const tag = "Test Tag 1";
    render(
      <Tags size={size}>
        <Tag>{tag}</Tag>
      </Tags>
    );
    expect(screen.getByText(tag).parentElement).toHaveClass(`are-${size}`);
  }
);
