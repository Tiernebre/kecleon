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

it("includes a close button by default", () => {
  const message = "A test notification.";
  render(<Notification>{message}</Notification>);
  const closeButton = screen.getByRole("button", {
    name: "Close Notification",
  });
  expect(closeButton).toBeInTheDocument();
});

it("includes a close button if specified", () => {
  const message = "A test notification.";
  render(<Notification closable>{message}</Notification>);
  const closeButton = screen.getByRole("button", {
    name: "Close Notification",
  });
  expect(closeButton).toBeInTheDocument();
});

it("does not include a close button if specified", () => {
  const message = "A test notification.";
  render(<Notification closable={false}>{message}</Notification>);
  const closeButton = screen.queryByRole("button", {
    name: "Close Notification",
  });
  expect(closeButton).toBeNull();
});
