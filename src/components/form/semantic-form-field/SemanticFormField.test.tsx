import { render, screen } from "@testing-library/react";
import { InputProps } from "../input";
import { SemanticFormField, SemanticFormFieldProps } from "./SemanticFormField";

it("displays the given label", () => {
  const id = "test-semantic-form-field";
  const input: InputProps = {
    type: "text",
  };
  const label = "Test Label";
  const props: SemanticFormFieldProps = {
    id,
    input,
    label,
  };
  render(<SemanticFormField {...props} />);
  expect(screen.getByLabelText(label)).toBeInTheDocument();
});

it("displays a help message if provided", () => {
  const id = "test-semantic-form-field";
  const input: InputProps = {
    type: "text",
  };
  const help = "Help";
  const label = "Test Label";
  const props: SemanticFormFieldProps = {
    id,
    input,
    label,
    help,
  };
  render(<SemanticFormField {...props} />);
  const helpMessage = screen.getByText(help);
  expect(helpMessage).toBeInTheDocument();
  expect(helpMessage).toHaveAttribute("id", `${id}-help`);
  expect(screen.getByRole("textbox")).toHaveAttribute(
    "aria-describedby",
    `${id}-help`
  );
});
