import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import { AlertColor } from "../../types";

it("renders children", () => {
  const message = "Expected Message";
  render(<Alert color="success">{message}</Alert>);
  expect(screen.getByText(message)).toBeInTheDocument();
});

it.each<AlertColor>(["success", "danger", "warning"])(
  "renders in color = %p",
  (color: AlertColor) => {
    const message = "Expected Message";
    render(<Alert color={color}>{message}</Alert>);
    expect(screen.getByText(message)).toHaveClass(`is-${color}`);
  }
);
