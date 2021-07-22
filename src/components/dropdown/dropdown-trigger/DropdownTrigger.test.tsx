import { screen, render } from "@testing-library/react";
import { DropdownTrigger } from "./DropdownTrigger";

it("renders given text", () => {
  const text = "Dropdown Trigger";
  render(<DropdownTrigger htmlFor="foo">{text}</DropdownTrigger>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("is properly connected to a given menu id", () => {
  const expectedId = "dropdown-menu";
  render(<DropdownTrigger htmlFor={expectedId} />);
  const trigger = screen.getByRole("button");
  expect(trigger).toHaveAttribute("aria-haspopup", "true");
  expect(trigger).toHaveAttribute("aria-controls", expectedId);
});
