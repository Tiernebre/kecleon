import { render, screen } from "@testing-library/react";
import { Color, colors } from "../../types";
import { Notification } from "./Notification";

it("renders children", () => {
  const message = "A test notification.";
  render(<Notification>{message}</Notification>);
  const notification = screen.getByText(message);
  expect(notification).toBeInTheDocument();
});

it.each<Color>(colors)(
  "renders with color = %p when provided",
  (color: Color) => {
    const message = "A test notification.";
    render(<Notification color={color}>{message}</Notification>);
    const notification = screen.getByText(message);
    expect(notification).toHaveClass(`is-${color}`);
  }
);
