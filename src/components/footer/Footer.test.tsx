import { screen, render } from "@testing-library/react";
import { Footer } from "./Footer";

it("renders children", () => {
  const text = "Footer";
  render(<Footer>{text}</Footer>);
  expect(screen.getByText(text)).toBeInTheDocument();
});
