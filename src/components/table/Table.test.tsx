import { screen, render } from "@testing-library/react";
import { Table } from "./Table";

const getTable = () => screen.getByRole("table");

it("is rendered with unopinionated styling by default", () => {
  render(<Table />);
  expect(getTable()).toHaveClass("table", { exact: true });
});

it("can be rendered with borders", () => {
  render(<Table bordered />);
  expect(getTable()).toHaveClass("is-bordered");
});

it("can be rendered without borders", () => {
  render(<Table bordered={false} />);
  expect(getTable()).not.toHaveClass("is-bordered");
});

it("can be rendered with stripes", () => {
  render(<Table striped />);
  expect(getTable()).toHaveClass("is-striped");
});

it("can be rendered without stripes", () => {
  render(<Table striped={false} />);
  expect(getTable()).not.toHaveClass("is-striped");
});

it("can be rendered with hoverable focus", () => {
  render(<Table hoverable />);
  expect(getTable()).toHaveClass("is-hoverable");
});

it("can be rendered without hoverable focus", () => {
  render(<Table hoverable={false} />);
  expect(getTable()).not.toHaveClass("is-hoverable");
});
