import { screen, render } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

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
