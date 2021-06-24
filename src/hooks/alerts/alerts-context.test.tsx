import { render, screen } from "@testing-library/react";
import { Fragment } from "react";
import { AlertsProvider, useAlerts } from "./alerts-context";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const AlertsTestBed = (): JSX.Element => {
  const { state, dispatch } = useAlerts();
  const { alerts } = state;

  const addAlert = () =>
    dispatch({
      type: "add",
      payload: {
        color: "success",
        message: "Test",
      },
    });

  return (
    <Fragment>
      <ol>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.message}</li>
        ))}
      </ol>
      <button onClick={addAlert}>Add Alert</button>
    </Fragment>
  );
};

it("by default is an empty array", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

it("adds an alert", () => {
  render(
    <AlertsProvider>
      <AlertsTestBed />
    </AlertsProvider>
  );
  act(() => {
    user.click(screen.getByRole("button", { name: "Add Alert" }));
  });
  expect(screen.getByText("Test")).toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(1);
});

it("throws an error if used outside a provider", () => {
  expect(() => render(<AlertsTestBed />)).toThrow(Error);
});
