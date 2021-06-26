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

it("invokes a handler callback if provided for on expiration", () => {
  jest.useFakeTimers();
  const message = "Message!";
  const time = 10000;
  const onExpiration = jest.fn();
  render(
    <Expire expiresInMillis={time} onExpire={onExpiration}>
      {message}
    </Expire>
  );
  expect(onExpiration).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(time);
  });
  expect(onExpiration).toHaveBeenCalledTimes(1);
});
