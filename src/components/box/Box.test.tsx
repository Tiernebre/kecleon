import { render, screen } from "@testing-library/react";
import { Box } from "./Box";
import { axe } from "jest-axe";

it("is accessible", async () => {
  const { container } = render(<Box>Box</Box>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it("renders children", () => {
  const message = "Hey, this is a test box!";
  render(<Box>{message}</Box>);
  const foundMessage = screen.getByText(message);
  expect(foundMessage).toBeInTheDocument();
});
