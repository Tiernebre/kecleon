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

it("does not render in mobile mode if provided as false", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns mobile={false}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-mobile");
});

it("does not render in mobile mode by default", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-mobile");
});

it("renders in gapless mode if provided", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns gapless>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).toHaveClass("is-gapless");
});

it("does not render in gapless mode if provided as false", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns gapless={false}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-gapless");
});

it("does not render in gapless mode by default", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-gapless");
});

it("renders in verticallyCentered mode if provided", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns verticallyCentered>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).toHaveClass("is-vcentered");
});

it("does not render in verticallyCentered mode if provided as false", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns verticallyCentered={false}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-vcentered");
});

it("does not render in verticallyCentered mode by default", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-vcentered");
});

it("renders in multiLine mode if provided", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns multiLine>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).toHaveClass("is-multiline");
});

it("does not render in multiLine mode if provided as false", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns multiLine={false}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-multiline");
});

it("does not render in multiLine mode by default", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-multiline");
});

it("renders in centered mode if provided", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns centered>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).toHaveClass("is-centered");
});

it("does not render in centered mode if provided as false", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns centered={false}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-centered");
});

it("does not render in centered mode by default", () => {
  const message = "Hello, I'm a column!";
  render(
    <Columns>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).not.toHaveClass("is-centered");
});

it("can be rendered with additional class names", () => {
  const additionalClassNames = "some-additional class-names";
  const message = "Hello, I'm a column!";
  render(
    <Columns className={additionalClassNames}>
      <Column>{message}</Column>
    </Columns>
  );
  const columnFound = screen.getByText(message);
  expect(columnFound.parentElement).toHaveClass(
    "some-additional",
    "class-names"
  );
});
