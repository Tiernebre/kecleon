import { screen, render } from "@testing-library/react";
import { DropdownTrigger } from "./DropdownTrigger";
import user from "@testing-library/user-event";

it("renders given text", () => {
  const text = "Dropdown Trigger";
  render(
    <DropdownTrigger htmlFor="foo" onClick={jest.fn()}>
      {text}
    </DropdownTrigger>
  );
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("is properly connected to a given menu id", () => {
  const expectedId = "dropdown-menu";
  render(<DropdownTrigger htmlFor={expectedId} onClick={jest.fn()} />);
  const trigger = screen.getByRole("button");
  expect(trigger).toHaveAttribute("aria-haspopup", "true");
  expect(trigger).toHaveAttribute("aria-controls", expectedId);
});

it("binds to on click event", () => {
  const onClick = jest.fn();
  render(<DropdownTrigger htmlFor="foo" onClick={onClick} />);
  user.click(screen.getByRole("button"));
});
