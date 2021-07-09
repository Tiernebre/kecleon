import { screen, render } from "@testing-library/react";
import { Table } from "./Table";

it("is rendered with unopinionated styling by default", () => {
  render(<Table />);
  expect(screen.getByRole("table")).toHaveClass("table", { exact: true });
});
