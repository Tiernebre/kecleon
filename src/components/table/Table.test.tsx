import { screen, render } from "@testing-library/react";
import { Table } from "./Table";

it("is rendered with unopinionated styling by default", () => {
  render(<Table />);
  expect(screen.getByRole("table")).toHaveClass("table", { exact: true });
});

it("can be rendered with borders", () => {
  render(<Table bordered />);
  expect(screen.getByRole("table")).toHaveClass("is-bordered");
});

it("can be rendered without borders", () => {
  render(<Table bordered={false} />);
  expect(screen.getByRole("table")).not.toHaveClass("is-bordered");
});
