import { render, screen } from "@testing-library/react";
import { Box } from "./Box";

it("renders children", () => {
  const message = "Hey, this is a test box!";
  render(<Box>{message}</Box>);
  const foundMessage = screen.getByText(message);
  expect(foundMessage).toBeInTheDocument();
});
