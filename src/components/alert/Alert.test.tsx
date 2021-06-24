import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";
import user from "@testing-library/user-event";

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
