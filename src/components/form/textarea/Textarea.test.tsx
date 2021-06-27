import { render, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";

it("displays a given placeholder", () => {
  const placeholder = "e.g. Hello World";
  render(<Textarea placeholder={placeholder} />);
  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
});

it("displays with the given amount of rows for height", () => {
  const rows = 10;
  render(<Textarea rows={rows} />);
  expect(screen.getByRole("textbox")).toHaveAttribute("rows", rows.toString());
});
