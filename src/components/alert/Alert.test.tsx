import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import user from "@testing-library/user-event";
import { AlertColor } from "../../types";

it("can be closed", () => {
  const onClose = jest.fn();
  render(<Alert color="success" onClose={onClose} />);
  const closeButton = screen.getByRole("button", {
    name: "Close Notification",
  });
  user.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});

it("renders children", () => {
  const message = "Expected Message";
  render(
    <Alert color="success" onClose={jest.fn()}>
      {message}
    </Alert>
  );
  expect(screen.getByText(message)).toBeInTheDocument();
});

it.each<AlertColor>(["success", "danger", "warning"])(
  "renders in color = %p",
  (color: AlertColor) => {
    const message = "Expected Message";
    render(
      <Alert color={color} onClose={jest.fn()}>
        {message}
      </Alert>
    );
    expect(screen.getByText(message)).toHaveClass(`is-${color}`);
  }
);
