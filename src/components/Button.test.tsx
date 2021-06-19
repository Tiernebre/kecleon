import { render, screen } from "@testing-library/react";
import { Button, ButtonColor, ButtonColors } from "./Button";
import user from "@testing-library/user-event";

const lightCompatibleColors: ButtonColor[] = [
  "primary",
  "danger",
  "warning",
  "success",
  "info",
  "link",
];

it("renders a button", () => {
  const text = "Button Test";
  render(<Button>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toBeInTheDocument();
});

it("renders a button with passed to natural HTML button attributes", () => {
  const text = "Button Test";
  const onClick = jest.fn();
  render(
    <Button type="submit" onClick={onClick}>
      {text}
    </Button>
  );
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toHaveAttribute("type", "submit");
  user.click(foundButton);
  expect(onClick).toHaveBeenCalled();
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

it.each<ButtonColor>(lightCompatibleColors)(
  "displays the button in a light variant with color = %p",
  (color: ButtonColor) => {
    const text = `Button ${color} Light Test`;
    render(
      <Button color={color} light={true}>
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

it.each<ButtonColor>(lightCompatibleColors)(
  "displays the button in a non-light variant with color = %p if light is false",
  (color: ButtonColor) => {
    const text = `Button ${color} Non-Light Test`;
    render(
      <Button color={color} light={false}>
        {text}
      </Button>
    );
    const foundButton = screen.getByRole("button", {
      name: text,
    });
    expect(foundButton).toHaveClass(`is-${color}`);
    expect(foundButton).not.toHaveClass("is-light");
  }
);

it.each<ButtonColor>(lightCompatibleColors)(
  "displays the button in a non-light variant with color = %p if light is not provided",
  (color: ButtonColor) => {
    const text = `Button ${color} Non-Light Test`;
    render(<Button color={color}>{text}</Button>);
    const foundButton = screen.getByRole("button", {
      name: text,
    });
    expect(foundButton).toHaveClass(`is-${color}`);
    expect(foundButton).not.toHaveClass("is-light");
  }
);
