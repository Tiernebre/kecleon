import { screen, render } from "@testing-library/react";
import { HeadingGroup, HeadingGroupLevel } from "./HeadingGroup";

it("renders with a default level of 3 for the title", () => {
  const title = "Title";
  render(<HeadingGroup title={title} />);
  const foundTitle = screen.getByText(title);
  expect(foundTitle).toHaveClass("is-3");
  expect(foundTitle.nodeName).toEqual("H3");
});

it("renders a given subtitle", () => {
  const title = "Title";
  const subtitle = "subtitle";
  render(<HeadingGroup title={title} subtitle={subtitle} />);
  const foundTitle = screen.getByText(title);
  expect(foundTitle).toBeInTheDocument();
  const foundSubtitle = screen.getByText(subtitle);
  expect(foundSubtitle).toBeInTheDocument();
});

it("renders a subtitle with level of 5 by default", () => {
  const title = "Title";
  const subtitle = "subtitle";
  render(<HeadingGroup title={title} subtitle={subtitle} />);
  const foundTitle = screen.getByText(title);
  expect(foundTitle).toBeInTheDocument();
  const foundSubtitle = screen.getByText(subtitle);
  expect(foundSubtitle).toHaveClass("is-5");
  expect(foundSubtitle.nodeName).toEqual("H5");
});

it.each<HeadingGroupLevel>([1, 2, 3, 4])(
  "renders with level = %p",
  (level: HeadingGroupLevel) => {
    const title = "Title";
    const subtitle = "subtitle";
    render(<HeadingGroup title={title} subtitle={subtitle} level={level} />);
    const foundTitle = screen.getByText(title);
    expect(foundTitle).toHaveClass(`is-${level}`);
    expect(foundTitle.nodeName).toEqual(`H${level}`);
    const foundSubtitle = screen.getByText(subtitle);
    const expectedSubtitleLevel = level + 2;
    expect(foundSubtitle).toHaveClass(`is-${expectedSubtitleLevel}`);
    expect(foundSubtitle.nodeName).toEqual(`H${expectedSubtitleLevel}`);
  }
);
