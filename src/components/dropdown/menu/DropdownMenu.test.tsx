import { screen, render } from "@testing-library/react";
import { DropdownMenu } from "./DropdownMenu";

it("can render given child HTML elements", () => {
  const text = "Dropdown Menu";
  render(
    <DropdownMenu id="foo" active={true}>
      {text}
    </DropdownMenu>
  );
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("will apply the given id", () => {
  const id = "foobaz";
  render(<DropdownMenu id={id} active={true} />);
  expect(screen.getByRole("menu")).toHaveAttribute("id", id);
});

it("accessibily informs user if it is visible", () => {
  render(<DropdownMenu id="id" active />);
  expect(screen.getByRole("menu")).toHaveAttribute("aria-hidden", "false");
});
