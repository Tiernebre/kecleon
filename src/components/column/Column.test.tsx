import { render, screen } from "@testing-library/react";
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
