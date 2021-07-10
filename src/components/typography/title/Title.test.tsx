import { screen, render } from "@testing-library/react";
import { HeadingLevel, headingLevels } from "../../../types";
import { Title } from "./Title";

const getTitle = () => screen.getByRole("heading");

it("by default is heading level 1", () => {
  render(<Title />);
  const title = getTitle();
  expect(title).toHaveClass("title is-1", { exact: true });
  expect(title.nodeName).toEqual("H1");
});

it("renders children data", () => {
  const text = "This is a custom title. Cool!";
  render(<Title>{text}</Title>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it.each<HeadingLevel>(headingLevels)(
  "can be rendered in level %p",
  (level: HeadingLevel) => {
    render(<Title level={level} />);
    const title = getTitle();
    expect(title).toHaveClass(`is-${level}`);
    expect(title.nodeName).toEqual(`H${level}`);
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
