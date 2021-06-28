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
