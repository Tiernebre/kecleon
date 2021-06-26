import { act, render, screen } from "@testing-library/react";
import { ExpirableAlert } from "./ExpirableAlert";
import user from "@testing-library/user-event";

it("is an alert that disappears within a set amount of time", () => {
  jest.useFakeTimers();
  const expiresInMillis = 15000;
  const alertText = "Alert";
  render(
    <ExpirableAlert
      expiresInMillis={expiresInMillis}
      color="danger"
      onClose={jest.fn()}
    >
      {alertText}
    </ExpirableAlert>
  );
  expect(screen.getByRole("alert")).toBeInTheDocument();
  act(() => {
    jest.advanceTimersByTime(expiresInMillis);
  });
  expect(screen.queryByRole("alert")).toBeNull();
});

it("invokes a callback when the alert expires", () => {
  jest.useFakeTimers();
  const expiresInMillis = 15000;
  const alertText = "Alert";
  const onExpire = jest.fn();
  render(
    <ExpirableAlert
      expiresInMillis={expiresInMillis}
      color="danger"
      onExpire={onExpire}
      onClose={jest.fn()}
    >
      {alertText}
    </ExpirableAlert>
  );
  expect(onExpire).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(expiresInMillis);
  });
  expect(onExpire).toHaveBeenCalledTimes(1);
});

it("invokes a callback when the alert is closed", () => {
  jest.useFakeTimers();
  const expiresInMillis = 15000;
  const alertText = "Alert";
  const onClose = jest.fn();
  render(
    <ExpirableAlert
      expiresInMillis={expiresInMillis}
      color="danger"
      onClose={onClose}
    >
      {alertText}
    </ExpirableAlert>
  );
  expect(onClose).not.toHaveBeenCalled();
  user.click(screen.getByRole("button", { name: "Close Notification" }));
  expect(onClose).toHaveBeenCalledTimes(1);
});
