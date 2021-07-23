import { screen, render, waitFor } from "@testing-library/react";
import { Direction, directions } from "../../../types";
import { Dropdown } from "./Dropdown";
import user from "@testing-library/user-event";

it("renders with unopinionated styling by default", () => {
  const text = "Dropdown";
  render(<Dropdown>{text}</Dropdown>);
  expect(screen.getByText(text)).toHaveClass("dropdown", { exact: true });
});

it("can be rendered with a custom class name", () => {
  const text = "Dropdown";
  const customClassName = "some-custom class-name";
  render(<Dropdown className={customClassName}>{text}</Dropdown>);
  expect(screen.getByText(text)).toHaveClass("some-custom", "class-name");
});

it("can be hoverable", () => {
  const text = "Dropdown";
  render(<Dropdown hoverable>{text}</Dropdown>);
  expect(screen.getByText(text)).toHaveClass("is-hoverable");
});

it("can be non-hoverable", () => {
  const text = "Dropdown";
  render(<Dropdown hoverable={false}>{text}</Dropdown>);
  expect(screen.getByText(text)).not.toHaveClass("is-hoverable");
});

it("can be active", () => {
  const text = "Dropdown";
  render(<Dropdown active>{text}</Dropdown>);
  expect(screen.getByText(text)).toHaveClass("is-active");
});

it("can be inactive", () => {
  const text = "Dropdown";
  render(<Dropdown active={false}>{text}</Dropdown>);
  expect(screen.getByText(text)).not.toHaveClass("is-active");
});

it.each<Direction>(directions)(
  "can be aligned to the %p",
  (direction: Direction) => {
    const text = "Dropdown";
    render(<Dropdown alignment={direction}>{text}</Dropdown>);
    expect(screen.getByText(text)).not.toHaveClass("is-active");
  }
);

it("can be a drop-up", () => {
  const text = "Dropdown";
  render(<Dropdown up>{text}</Dropdown>);
  expect(screen.getByText(text)).toHaveClass("is-up");
});

it("can be a drop-down", () => {
  const text = "Dropdown";
  render(<Dropdown up={false}>{text}</Dropdown>);
  expect(screen.getByText(text)).not.toHaveClass("is-up");
});

it("binds to a click outside event if it is clicked outside of", async () => {
  const onClickOutside = jest.fn();
  render(
    <div>
      <Dropdown onClickOutside={onClickOutside}>Dropdown</Dropdown>
      <div>Outside Element!</div>
    </div>
  );
  user.click(screen.getByText(/outside/i));
  await waitFor(() => expect(onClickOutside).toHaveBeenCalledTimes(1));
});
