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

it.each<ButtonColor>(["primary", "danger", "warning", "success"])(
  "displays the button in a light variant with color = %p",
  (color: ButtonColor) => {
    const text = `Button ${color} Light Test`;
    render(
      <Button color={color} light>
        {text}
      </Button>
    );
    const foundButton = screen.getByRole("button", {
      name: text,
    });
    expect(foundButton).toHaveClass(`is-${color}`);
    expect(foundButton).toHaveClass("is-light");
  }
);
