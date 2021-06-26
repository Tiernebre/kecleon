import { render, screen } from "@testing-library/react";
import { AlertsProvider, useAlerts } from "../../hooks";
import { SmartAlerts } from "./SmartAlerts";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

type ShowAlertButtonProps = {
  message: string;
};

const ShowAlertButton = ({ message }: ShowAlertButtonProps) => {
  const { showAlert } = useAlerts();
  return (
    <button onClick={() => showAlert({ message, color: "success" })}>
      Add Alert
    </button>
  );
};

const addAlert = () => {
  act(() => {
    const addAlertButton = screen.getByRole("button", { name: "Add Alert" });
    user.click(addAlertButton);
  });
};

it("renders out alerts from the context", () => {
  render(
    <AlertsProvider>
      <SmartAlerts />
      <ShowAlertButton message="Test Alert" />
    </AlertsProvider>
  );
  let alerts = screen.queryAllByRole("alert");
  expect(alerts).toHaveLength(0);
  addAlert();
  alerts = screen.getAllByRole("alert");
  expect(alerts).toHaveLength(1);
});
