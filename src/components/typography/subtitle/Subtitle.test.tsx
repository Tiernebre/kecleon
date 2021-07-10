import { screen, render } from "@testing-library/react";
import { HeadingLevel, headingLevels } from "../../../types";
import { Subtitle } from "./Subtitle";

const getSubtitle = () => screen.getByRole("heading");

it("by default is heading level 5", () => {
  render(<Subtitle />);
  const subtitle = getSubtitle();
  expect(subtitle).toHaveClass("subtitle is-5", { exact: true });
  expect(subtitle.nodeName).toEqual("H5");
});

it("renders children data", () => {
  const text = "This is a custom subtitle. Cool!";
  render(<Subtitle>{text}</Subtitle>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it.each<HeadingLevel>(headingLevels)(
  "can be rendered in level %p",
  (level: HeadingLevel) => {
    render(<Subtitle level={level} />);
    const subtitle = getSubtitle();
    expect(subtitle).toHaveClass(`is-${level}`);
    expect(subtitle.nodeName).toEqual(`H${level}`);
  }
);
