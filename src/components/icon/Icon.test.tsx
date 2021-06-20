import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

it("renders an icon", () => {
  const message = "Home";
  render(<Icon name="home" message={message} />);
  const icon = screen.getByTitle(message);
  expect(icon).toBeInTheDocument();
});

it("renders the message for screen readers only", () => {
  const message = "Create Test";
  render(<Icon name="plus" message={message} />);
  const screenOnlyMessage = screen.getByText(message);
  expect(screenOnlyMessage).toHaveClass("is-sr-only");
});

it("does not render the screen reader message if a message is not provided", () => {
  render(<Icon name="minus" />);
  const screenOnlyMessage = screen.queryByTestId("icon-screen-reader-message");
  expect(screenOnlyMessage).toBeNull();
});
