import { act, render, screen } from "@testing-library/react";
import { Expire } from "./Expire";

it("removes children after a set amount of time", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  render(<Expire expiresInMillis={time}>{message}</Expire>);
  expect(screen.getByText(message)).toBeInTheDocument();
  act(() => {
    jest.advanceTimersByTime(time);
  });
  expect(screen.queryByText(message)).toBeNull();
});
