import { screen, render } from "@testing-library/react";
import { Tag } from "../tag/Tag";
import { Tags } from "./Tags";

it("renders given children", () => {
  render(
    <Tags>
      <Tag>Test Tag 1</Tag>
      <Tag>Test Tag 2</Tag>
    </Tags>
  );
});
