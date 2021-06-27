import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

it("ties the given ID to the checkbox input", () => {
  const label = "Test Checkbox";
  const id = "test-foo-baz";
  render(<Checkbox id={id}>{label}</Checkbox>);
  const checkbox = screen.getByLabelText(label);
  expect(checkbox).toBeInTheDocument();
});
