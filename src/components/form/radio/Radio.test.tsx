import { render, screen } from "@testing-library/react";
import { Radio } from "./Radio";
import user from "@testing-library/user-event";

it("ties the given ID to the radio input", () => {
  const label = "Test Checkbox";
  const id = "test-foo-baz";
  render(<Radio id={id}>{label}</Radio>);
  const radio = screen.getByLabelText(label);
  expect(radio).toBeInTheDocument();
});

it("respects a given name attribute", () => {
  const label = "Test Checkbox";
  const id = "test-foo-baz";
  const name = "testName";
  render(
    <Radio id={id} name={name}>
      {label}
    </Radio>
  );
  const radio = screen.getByLabelText(label);
  expect(radio).toHaveAttribute("name", name);
});

it("binds to a callback when a change occurs", () => {
  const label = "Test Checkbox";
  const id = "test-foo-baz";
  const onChange = jest.fn();
  render(
    <Radio id={id} onChange={onChange}>
      {label}
    </Radio>
  );
  expect(onChange).not.toHaveBeenCalled();
  const radio = screen.getByLabelText(label);
  user.click(radio);
  expect(onChange).toHaveBeenCalledTimes(1);
});
