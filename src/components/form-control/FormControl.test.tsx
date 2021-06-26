import { render, screen } from "@testing-library/react";
import { Input } from "../input";
import { FormControl } from "./FormControl";

it("renders given content", () => {
  render(
    <FormControl>
      <Input />
    </FormControl>
  );
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("allows for icons aligned to the left", () => {
  render(
    <FormControl hasIconsLeft>
      <Input />
    </FormControl>
  );
  const input = screen.getByRole("textbox");
  expect(input.parentElement).toHaveClass("has-icons-left");
});

it("allows for icons aligned to the right", () => {
  render(
    <FormControl hasIconsRight>
      <Input />
    </FormControl>
  );
  const input = screen.getByRole("textbox");
  expect(input.parentElement).toHaveClass("has-icons-right");
});

it("allows for icons aligned to the right AND left", () => {
  render(
    <FormControl hasIconsRight hasIconsLeft>
      <Input />
    </FormControl>
  );
  const input = screen.getByRole("textbox");
  expect(input.parentElement).toHaveClass("has-icons-right");
  expect(input.parentElement).toHaveClass("has-icons-left");
});
