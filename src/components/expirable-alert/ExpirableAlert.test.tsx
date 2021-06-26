import { act, render, screen } from "@testing-library/react";
import { ExpirableAlert } from "./ExpirableAlert";

it("is an alert that disappears within a set amount of time", () => {
  jest.useFakeTimers();
  const expiresInMillis = 15000;
  const alertText = "Alert";
  render(
    <ExpirableAlert expiresInMillis={expiresInMillis} color="danger">
      {alertText}
    </ExpirableAlert>
  );
  expect(screen.getByRole("alert")).toBeInTheDocument();
  act(() => {
    jest.advanceTimersByTime(expiresInMillis);
  });
  expect(screen.queryByRole("alert")).toBeNull();
});
