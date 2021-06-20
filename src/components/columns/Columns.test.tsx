import { render, screen } from "@testing-library/react";
import { Column } from "../column/Column";
import { Columns } from "./Columns";

it("renders given children", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound).toBeInTheDocument();
});

it("renders in mobile mode if provided", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns mobile>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).toHaveClass("is-mobile");
});

it("renders in mobile mode if provided as false", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns mobile={false}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-mobile");
});

it("renders in non mobile mode by default", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-mobile");
});
