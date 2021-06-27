import { render, screen } from "@testing-library/react";
import { Fragment } from "react";
import { Label } from ".";
import { Input } from "../input";

it("renders given content", () => {
  const message = "Label";
  render(<Label>{message}</Label>);
  expect(screen.getByText(message)).toBeInTheDocument();
});

it("can semantically be tied to a corresponding input", () => {
  const message = "Label";
  const id = "foobaz";
  render(
    <Fragment>
      <Label htmlFor={id}>{message}</Label>
      <Input id={id} type="text" />
    </Fragment>
  );
  const input = screen.getByLabelText(message);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
});

it("has the correct corresponding class", () => {
  const message = "Label";
  render(<Label>{message}</Label>);
  expect(screen.getByText(message)).toHaveClass("label");
});
