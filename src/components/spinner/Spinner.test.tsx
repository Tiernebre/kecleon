import { screen, render } from "@testing-library/react";
import { Spinner } from ".";
import { Color, colors, Size, sizes } from "../../types";
import styles from "./Spinner.module.scss";

it("by default is white", () => {
  render(<Spinner />);
  expect(screen.getByRole("alert")).toHaveClass(styles["is-black"]);
});

it("by default is labeled with 'Loading...'", () => {
  render(<Spinner />);
  const spinner = screen.getByRole("alert");
  expect(spinner).toHaveAttribute("aria-label", "Loading...");
});

it("supports a custom label", () => {
  const label = "Loading Test...";
  render(<Spinner label={label} />);
  const spinner = screen.getByRole("alert");
  expect(spinner).toHaveAttribute("aria-label", label);
});

it.each<Color>(colors)("can be colored in %p", (color: Color) => {
  render(<Spinner color={color} />);
  expect(screen.getByRole("alert")).toHaveClass(styles[`is-${color}`]);
});

it.each<Size>(sizes)("can be sized in %p", (size: Size) => {
  render(<Spinner size={size} />);
  expect(screen.getByRole("alert")).toHaveClass(styles[`is-${size}`]);
});

it("supports being provided CSS as a prop", () => {
  const css = {
    margin: "10px",
  };
  render(<Spinner css={css} />);
  expect(screen.getByRole("alert")).toHaveStyle("margin: 10px");
});
