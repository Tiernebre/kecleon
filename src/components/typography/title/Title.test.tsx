import { screen, render } from "@testing-library/react";
import { HeadingLevel, headingLevels } from "../../../types";
import { Title } from "./Title";

const getTitle = () => screen.getByRole("heading");

it("by default has unopinionated styling", () => {
  render(<Title />);
  expect(getTitle()).toHaveClass("title", { exact: true });
});

it.each<HeadingLevel>(headingLevels)(
  "can be rendered in level %p",
  (level: HeadingLevel) => {
    render(<Title level={level} />);
    expect(getTitle()).toHaveClass(`is-${level}`);
    expect(getTitle().nodeName).toEqual(`H${level}`);
  }
);

it("can be rendered with spacing", () => {
  render(<Title spaced />);
  expect(getTitle()).toHaveClass("is-spaced");
});

it("can be rendered without spacing", () => {
  render(<Title spaced={false} />);
  expect(getTitle()).not.toHaveClass("is-spaced");
});
