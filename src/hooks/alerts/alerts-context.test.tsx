import { render, screen } from "@testing-library/react";
import { createRef, Fragment } from "react";
import { AlertsProvider, useAlerts } from "./alerts-context";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { AlertRequest } from "../../types/alert";

const AlertsTestBed = (): JSX.Element => {
  const { state, dispatch, showAlert } = useAlerts();
  const { alerts } = state;
  const idInput = createRef<HTMLInputElement>();

  const payload: AlertRequest = {
    color: "success",
    message: `Test ${alerts.length}`,
  };
  const dequeueAlert = () => dispatch({ type: "dequeue" });
  const removeAlertById = () =>
    dispatch({ type: "remove", id: idInput?.current?.value ?? "" });

  return (
    <Fragment>
      <ol>
        {alerts.map((alert) => (
          <li key={alert.id}>{alert.id}</li>
        ))}
      </ol>
      <button onClick={() => showAlert(payload)}>Queue Alert</button>
      <button onClick={dequeueAlert}>Dequeue Alert</button>
      <input type="text" ref={idInput} placeholder="ID to remove" />
      <button onClick={removeAlertById}>Remove Alert</button>
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
  expect(screen.queryAllByRole("listitem")).toHaveLength(1);
});

it("dequeues an alert", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  addAlert();
  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  act(() => {
    user.click(getDequeueButton());
  });
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

it("removes an alert", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  const length = 10;
  for (let i = 0; i < length; i++) {
    addAlert();
  }
  const alerts = screen.getAllByRole("listitem");
  expect(alerts).toHaveLength(length);
  const alertToRemove = alerts[5];
  const idToRemove = alertToRemove.textContent as string;
  expect(screen.getByText(idToRemove)).toBeInTheDocument();
  act(() => {
    user.type(screen.getByPlaceholderText("ID to remove"), idToRemove);
    user.click(getRemoveButton());
  });
  expect(screen.queryAllByRole("listitem")).toHaveLength(length - 1);
  expect(screen.queryByText(idToRemove)).toBeNull();
});

it("throws an error if used outside its associated provider", () => {
  expect(() => render(<AlertsTestBed />)).toThrow(Error);
});
