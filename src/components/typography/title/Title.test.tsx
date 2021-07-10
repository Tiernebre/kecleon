import { screen, render } from "@testing-library/react";
import { Title } from "./Title";

const getTitle = () => screen.getByRole("heading");

it("by default has unopinionated styling", () => {
  render(<Title />);
  expect(getTitle()).toHaveClass("title", { exact: true });
});

it("can be rendered with spacing", () => {
  render(<Title spaced />);
  expect(getTitle()).toHaveClass("is-spaced");
});

it("can be rendered without spacing", () => {
  render(<Title spaced={false} />);
  expect(getTitle()).not.toHaveClass("is-spaced");
});
