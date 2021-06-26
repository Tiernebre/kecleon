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

it("invokes a handler callback if provided for on removal", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  const onRemoval = jest.fn();
  render(
    <Expire expiresInMillis={time} onRemoval={onRemoval}>
      {message}
    </Expire>
  );
  expect(onRemoval).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(time);
  });
  expect(onRemoval).toHaveBeenCalledTimes(1);
});
