import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

it("renders children", () => {
  const message = "This is a test container. Cool!";
  render(<Container>{message}</Container>);
  const container = screen.getByText(message);
  expect(container).toBeInTheDocument();
});

it("renders in fluid mode if provided", () => {
  const message = "This is a test container. Cool!";
  render(<Container fluid>{message}</Container>);
  const container = screen.getByText(message);
  expect(container).toHaveClass("is-fluid");
});

it("renders in non-fluid mode if provided as false", () => {
  const message = "This is a test container. Cool!";
  render(<Container fluid={false}>{message}</Container>);
  const container = screen.getByText(message);
  expect(container).not.toHaveClass("is-fluid");
});

it("renders in non-fluid mode by default", () => {
  const message = "This is a test container. Cool!";
  render(<Container>{message}</Container>);
  const container = screen.getByText(message);
  expect(container).not.toHaveClass("is-fluid");
});
