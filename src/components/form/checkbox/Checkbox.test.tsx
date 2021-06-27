import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import user from "@testing-library/user-event";

it("ties the given ID to the checkbox input", () => {
  const label = "Test Checkbox";
  const id = "test-foo-baz";
  render(<Checkbox id={id}>{label}</Checkbox>);
  const checkbox = screen.getByLabelText(label);
  expect(checkbox).toBeInTheDocument();
});

it("binds to a callback when a change occurs", () => {
  const label = "Test Checkbox";
  const id = "test-foo-baz";
  const onChange = jest.fn();
  render(
    <Checkbox id={id} onChange={onChange}>
      {label}
    </Checkbox>
  );
  expect(onChange).not.toHaveBeenCalled();
  const checkbox = screen.getByLabelText(label);
  user.click(checkbox);
  expect(onChange).toHaveBeenCalledTimes(1);
  user.click(checkbox);
  expect(onChange).toHaveBeenCalledTimes(2);
});
