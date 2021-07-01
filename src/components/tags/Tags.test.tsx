import { render, screen } from "@testing-library/react";
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
