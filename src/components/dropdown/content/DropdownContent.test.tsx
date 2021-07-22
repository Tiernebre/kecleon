import { screen, render } from "@testing-library/react";
import { DropdownContent } from "./DropdownContent";

it("renders given HTML content", () => {
  const content = "Content";
  render(<DropdownContent>{content}</DropdownContent>);
  expect(screen.getByText(content)).toBeInTheDocument();
});
