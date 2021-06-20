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
