import { render, screen } from "@testing-library/react";
import { AlertsProvider, useAlerts } from "./alerts-context";

const AlertsTestBed = (): JSX.Element => {
  const { state } = useAlerts();
  const { alerts } = state;

  return (
    <ol>
      {alerts.map((alert, index) => (
        <li key={index}>{JSON.stringify(alert)}</li>
      ))}
    </ol>
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
