import { screen, render } from "@testing-library/react";
import { DropdownTrigger } from "./DropdownTrigger";

it("renders given text", () => {
  const text = "Dropdown Trigger";
  render(<DropdownTrigger>{text}</DropdownTrigger>);
  expect(screen.getByText(text)).toBeInTheDocument();
});
