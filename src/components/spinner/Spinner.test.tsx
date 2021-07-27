import { screen, render } from "@testing-library/react";
import { Spinner } from ".";
import styles from "./Spinner.module.scss";

it("by default is white", () => {
  render(<Spinner />);
  expect(screen.getByRole("alert")).toHaveClass(styles["is-white"]);
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
