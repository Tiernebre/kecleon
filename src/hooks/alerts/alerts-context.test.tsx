import { render, screen } from "@testing-library/react";
import { Fragment } from "react";
import { AlertsProvider, useAlerts } from "./alerts-context";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { AlertRequest } from "../../types/alert";

type AlertsTestBedProps = {
  index?: number;
};

const AlertsTestBed = ({ index }: AlertsTestBedProps): JSX.Element => {
  const { state, dispatch, showAlert } = useAlerts();
  const { alerts } = state;

  const payload: AlertRequest = {
    color: "success",
    message: `Test ${alerts.length}`,
  };
  const dequeueAlert = () => dispatch({ type: "dequeue" });
  const removeAlertByIndex = () =>
    dispatch({ type: "remove", index: index ?? 0 });

  return (
    <Fragment>
      <ol>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.message}</li>
        ))}
      </ol>
      <button onClick={() => showAlert(payload)}>Queue Alert</button>
      <button onClick={dequeueAlert}>Dequeue Alert</button>
      <button onClick={removeAlertByIndex}>Remove Alert</button>
    </Fragment>
  );
};

const getQueueButton = () =>
  screen.getByRole("button", { name: "Queue Alert" });
const getDequeueButton = () =>
  screen.getByRole("button", { name: "Dequeue Alert" });
const getRemoveButton = () =>
  screen.getByRole("button", { name: "Remove Alert" });

const addAlert = () => {
  act(() => {
    user.click(getQueueButton());
  });
};

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
  addAlert();
  expect(screen.getByText("Test 0")).toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(1);
});

it("dequeues an alert", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  addAlert();
  expect(screen.getByText("Test 0")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  act(() => {
    user.click(getDequeueButton());
  });
  expect(screen.queryByText("Test 0")).toBeNull();
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

it("removes an alert", () => {
  const index = 5;
  render(
    <AlertsProvider>
      <AlertsTestBed index={index} />
    </AlertsProvider>
  );
  const length = 10;
  for (let i = 0; i < length; i++) {
    addAlert();
  }
  expect(screen.getAllByRole("listitem")).toHaveLength(length);
  act(() => {
    user.click(getRemoveButton());
  });
  expect(screen.queryAllByRole("listitem")).toHaveLength(length - 1);
  expect(screen.queryByText("Test 5")).toBeNull();
});

it("throws an error if used outside its associated provider", () => {
  expect(() => render(<AlertsTestBed />)).toThrow(Error);
});
