import { render, screen } from "@testing-library/react";
import { Size, sizes } from "../../types";
import { Input } from "../input";
import { FormControl } from "./FormControl";

it("by default has unopinionated styling", () => {
  render(
    <FormControl>
      <Input />
    </FormControl>
  );
  const input = screen.getByRole("textbox");
  expect(input.parentElement).toHaveClass("control", { exact: true });
});

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

it("can be displayed in loading state if specified", () => {
  render(
    <FormControl hasIconsRight hasIconsLeft loading>
      <Input />
    </FormControl>
  );
  const input = screen.getByRole("textbox");
  expect(input.parentElement).toHaveClass("is-loading");
});

it("does not display in loading state if specified as false", () => {
  render(
    <FormControl hasIconsRight hasIconsLeft loading={false}>
      <Input />
    </FormControl>
  );
  const input = screen.getByRole("textbox");
  expect(input.parentElement).not.toHaveClass("is-loading");
});

it.each<Size>(sizes)(
  "displays the loading spinner in size = %p",
  (size: Size) => {
    render(
      <FormControl hasIconsRight hasIconsLeft loading loadingSize={size}>
        <Input />
      </FormControl>
    );
    const input = screen.getByRole("textbox");
    expect(input.parentElement).toHaveClass(`is-${size}`);
  }
);
