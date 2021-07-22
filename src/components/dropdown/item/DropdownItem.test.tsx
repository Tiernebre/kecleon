import { screen, render } from "@testing-library/react";
import { DropdownItem } from "./DropdownItem";

it("renders given text", () => {
  const text = "Dropdown Item";
  render(<DropdownItem>{text}</DropdownItem>);
  expect(screen.getByText(text)).toBeInTheDocument();
});
