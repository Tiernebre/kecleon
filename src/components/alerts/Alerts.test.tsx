import { render, screen } from "@testing-library/react";
import { Alert } from "../alert/Alert";
import { Alerts } from "./Alerts";

it("renders children", () => {
  render(
    <Alerts>
      <Alert color="success">First Alert</Alert>
      <Alert color="success">Second Alert</Alert>
    </Alerts>
  );
  expect(screen.getAllByRole("alert")).toHaveLength(2);
});
