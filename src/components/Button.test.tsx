import { render, screen } from "@testing-library/react";
import { Button, ButtonColor, ButtonColors } from "./Button";

it("renders a button", () => {
  const text = "Button Test";
  render(<Button>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toBeInTheDocument();
});

it.each(ButtonColors)(
  "displays the button with color %p when provided",
  (color: ButtonColor) => {
    const text = `Button ${color} Test`;
    render(<Button color={color}>{text}</Button>);
    const foundButton = screen.getByRole("button", {
      name: text,
    });
    expect(foundButton).toHaveClass(`is-${color}`);
  }
);
