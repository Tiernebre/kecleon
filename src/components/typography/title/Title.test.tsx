import { screen, render } from "@testing-library/react";
import { Title } from "./Title";

const getTitle = () => screen.getByRole("heading");

it("by default has unopinionated styling", () => {
  render(<Title />);
  expect(getTitle()).toHaveClass("title", { exact: true });
});
