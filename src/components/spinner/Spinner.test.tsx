import { screen, render } from "@testing-library/react";
import { Spinner } from ".";
import styles from "./Spinner.module.scss";

it("by default is white", () => {
  render(<Spinner />);
  expect(screen.getByRole("alert")).toHaveClass(styles["is-white"]);
});
