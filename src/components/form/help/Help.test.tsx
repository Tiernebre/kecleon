import { render, screen } from "@testing-library/react";
import { Help } from "./Help";

it("renders given content", () => {
  const message = "This is a help text";
  render(<Help>{message}</Help>);
  expect(screen.getByText(message)).toBeInTheDocument();
});

it("has the correct corresponding class", () => {
  const message = "This is a help text";
  render(<Help>{message}</Help>);
  expect(screen.getByText(message)).toHaveClass("help");
});