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

it("is bound to its given id", () => {
  const id = "first-name-help";
  const message = "This is a help text";
  render(<Help id={id}>{message}</Help>);
  expect(screen.getByText(message)).toHaveAttribute("id", id);
});

it("displays an error message if an error passed in is truthy", () => {
  const id = "first-name-help";
  const message = "This is a help text";
  const error = {
    type: "required",
    message: "this field is required",
  };
  render(
    <Help id={id} error={error}>
      {message}
    </Help>
  );
  const help = screen.getByText(error.message);
  expect(help).toBeInTheDocument();
  expect(help).toHaveClass("is-danger");
  expect(screen.queryByText(message)).toBeNull();
});

it("does not render anything if not given children or an error", () => {
  const dataTestId = "emptyHelp";
  render(<Help data-testid={dataTestId}></Help>);
  expect(screen.queryByTestId(dataTestId)).toBeNull();
});
