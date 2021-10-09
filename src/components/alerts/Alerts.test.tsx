import { render, screen } from "@testing-library/react";
import { Alert } from "../alert/Alert";
import { Alerts } from "./Alerts";
import { axe } from "jest-axe";

it("is accessible", async () => {
  const { container } = render(
    <Alerts>
      <Alert color="success">First Alert</Alert>
      <Alert color="success">Second Alert</Alert>
    </Alerts>
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it("renders children", () => {
  render(
    <Alerts>
      <Alert color="success">First Alert</Alert>
      <Alert color="success">Second Alert</Alert>
    </Alerts>
  );
  expect(screen.getAllByRole("alert")).toHaveLength(2);
});
