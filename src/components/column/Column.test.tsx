import { render, screen } from "@testing-library/react";
import { Direction, directions } from "../../types";
import { Column, ColumnSize, columnSizes } from "./Column";

it.each<ColumnSize>(columnSizes)(
  "renders with size = %p when provided",
  (columnSize: ColumnSize) => {
    const message = "Column";
    render(<Column size={columnSize}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-${columnSize}`);
  }
);

it.each<ColumnSize>(columnSizes)(
  "renders with offset = %p when provided",
  (offset: ColumnSize) => {
    const message = "Column";
    render(<Column offset={offset}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-offset-${offset}`);
  }
);

it.each<ColumnSize>(columnSizes)(
  "renders with mobile size = %p when provided",
  (mobile: ColumnSize) => {
    const message = "Column";
    render(<Column mobile={mobile}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-${mobile}-mobile`);
  }
);

it.each<ColumnSize>(columnSizes)(
  "renders with tablet size = %p when provided",
  (tablet: ColumnSize) => {
    const message = "Column";
    render(<Column tablet={tablet}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-${tablet}-tablet`);
  }
);

it.each<ColumnSize>(columnSizes)(
  "renders with desktop size = %p when provided",
  (desktop: ColumnSize) => {
    const message = "Column";
    render(<Column desktop={desktop}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-${desktop}-desktop`);
  }
);

it.each<ColumnSize>(columnSizes)(
  "renders with widescreen size = %p when provided",
  (widescreen: ColumnSize) => {
    const message = "Column";
    render(<Column widescreen={widescreen}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-${widescreen}-widescreen`);
  }
);

it.each<ColumnSize>(columnSizes)(
  "renders with fullHd size = %p when provided",
  (fullHd: ColumnSize) => {
    const message = "Column";
    render(<Column fullHd={fullHd}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(`is-${fullHd}-fullhd`);
  }
);

it("renders as narrow if provided", () => {
  const message = "Column";
  render(<Column narrow={true}>{message}</Column>);
  const column = screen.getByText(message);
  expect(column).toHaveClass("is-narrow");
});

it("not rendered as narrow if provided as false", () => {
  const message = "Column";
  render(<Column narrow={false}>{message}</Column>);
  const column = screen.getByText(message);
  expect(column).not.toHaveClass("is-narrow");
});

it("not rendered as narrow by default", () => {
  const message = "Column";
  render(<Column>{message}</Column>);
  const column = screen.getByText(message);
  expect(column).not.toHaveClass("is-narrow");
});

it.each<Direction>(directions)(
  "can be aligned in the %p direction",
  (direction: Direction) => {
    const message = "Column";
    render(<Column align={direction}>{message}</Column>);
    const column = screen.getByText(message);
    expect(column).toHaveClass(direction);
  }
);
