import { render, screen } from "@testing-library/react";
import { Fragment } from "react";
import { AlertsProvider, useAlerts } from "./alerts-context";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const AlertsTestBed = (): JSX.Element => {
  const { state, dispatch } = useAlerts();
  const { alerts } = state;

  const queueAlert = () =>
    dispatch({
      type: "queue",
      payload: {
        color: "success",
        message: "Test",
      },
    });
  const dequeueAlert = () => dispatch({ type: "dequeue" });

  return (
    <Fragment>
      <ol>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.message}</li>
        ))}
      </ol>
      <button onClick={queueAlert}>Queue Alert</button>
      <button onClick={dequeueAlert}>Dequeue Alert</button>
    </Fragment>
  );
};

const getQueueButton = () =>
  screen.getByRole("button", { name: "Queue Alert" });
const getDequeueButton = () =>
  screen.getByRole("button", { name: "Dequeue Alert" });

it("by default is an empty array", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

it("queues an alert", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  act(() => {
    user.click(getQueueButton());
  });
  expect(screen.getByText("Test")).toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(1);
});

it("dequeues an alert", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  act(() => {
    user.click(getQueueButton());
  });
  expect(screen.getByText("Test")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  act(() => {
    user.click(getDequeueButton());
  });
  expect(screen.queryByText("Test")).toBeNull();
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

it("throws an error if used outside its associated provider", () => {
  expect(() => render(<AlertsTestBed />)).toThrow(Error);
});
