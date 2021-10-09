import { render, screen } from "@testing-library/react";
import { Button } from "../button/Button";
import { Buttons } from "./Buttons";
import { axe } from "jest-axe";

it("is accessible", async () => {
  const firstText = "First Button";
  const secondText = "Second Button";
  const { container } = render(
    <Buttons>
      <Button color="success">{firstText}</Button>
      <Button color="danger">{secondText}</Button>
    </Buttons>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it("renders child buttons", () => {
  const firstText = "First Button";
  const secondText = "Second Button";
  render(
    <Buttons>
      <Button color="success">{firstText}</Button>
      <Button color="danger">{secondText}</Button>
    </Buttons>
  );
  const firstButton = screen.getByRole("button", { name: firstText });
  const secondButton = screen.getByRole("button", { name: secondText });
  expect(firstButton).toBeInTheDocument();
  expect(secondButton).toBeInTheDocument();
});
