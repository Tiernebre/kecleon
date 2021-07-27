import { screen, render } from "@testing-library/react";
import { PageSpinner } from ".";
import { Color, colors, Size, sizes } from "../../types";
import styles from "../spinner/Spinner.module.scss";

it("by default is white", () => {
  render(<PageSpinner />);
  expect(screen.getByRole("alert")).toHaveClass(styles["is-black"]);
});

it("by default is labeled with 'Loading...'", () => {
  render(<PageSpinner />);
  const spinner = screen.getByRole("alert");
  expect(spinner).toHaveAttribute("aria-label", "Loading...");
});

it("supports a custom label", () => {
  const label = "Loading Test...";
  render(<PageSpinner label={label} />);
  const spinner = screen.getByRole("alert");
  expect(spinner).toHaveAttribute("aria-label", label);
});

it.each<Color>(colors)("can be colored in %p", (color: Color) => {
  render(<PageSpinner color={color} />);
  expect(screen.getByRole("alert")).toHaveClass(styles[`is-${color}`]);
});

it.each<Size>(sizes)("can be sized in %p", (size: Size) => {
  render(<PageSpinner size={size} />);
  expect(screen.getByRole("alert")).toHaveClass(styles[`is-${size}`]);
});
