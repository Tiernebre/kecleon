import { render, screen } from "@testing-library/react";
import {
  Button,
  ButtonColor,
  ButtonColors,
  ButtonSize,
  ButtonSizes,
} from "./Button";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";

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
  expect(foundButton).toHaveClass("button", { exact: true });
  expect(foundButton.nodeName).toEqual("BUTTON");
});

it("renders a button with passed to natural HTML button attributes", () => {
  const text = "Button Test";
  const onClick = jest.fn();
  const type = "submit";
  const name = "testButton";
  render(
    <Button type={type} onClick={onClick} name={name}>
      {text}
    </Button>
  );
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toHaveAttribute("type", type);
  expect(foundButton).toHaveAttribute("name", name);
  user.click(foundButton);
  expect(onClick).toHaveBeenCalled();
});

it("can be disabled", () => {
  const text = "Disabled Button";
  render(<Button disabled>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toBeDisabled();
});

it("can be enabled", () => {
  const text = "Disabled Button";
  render(<Button disabled={false}>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).not.toBeDisabled();
});

it("by default is enabled", () => {
  const text = "Disabled Button";
  render(<Button disabled={false}>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).not.toBeDisabled();
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

it.each<ButtonSize>(ButtonSizes)(
  "displays the button in size %p if provided",
  (size: ButtonSize) => {
    const text = `Button Size ${size} Test`;
    render(<Button size={size}>{text}</Button>);
    const foundButton = screen.getByRole("button", {
      name: text,
    });
    expect(foundButton).toHaveClass(`is-${size}`);
  }
);

it("can be loading", () => {
  const text = "Button Loading Test";
  render(<Button loading>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toHaveClass("is-loading");
});

it("can be not loading", () => {
  const text = "Button Loading Test";
  render(<Button loading={false}>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).not.toHaveClass("is-loading");
});

it("by default is not loading", () => {
  const text = "Button Loading Test";
  render(<Button>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).not.toHaveClass("is-loading");
});

it("renders a button in full width if provided", () => {
  const text = "Button Loading Test";
  render(<Button fullWidth>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).toHaveClass("is-fullwidth");
});

it("does not renders a button in full width if specifically provided as false", () => {
  const text = "Button Loading Test";
  render(<Button fullWidth={false}>{text}</Button>);
  const foundButton = screen.getByRole("button", {
    name: text,
  });
  expect(foundButton).not.toHaveClass("is-fullwidth");
});

it("can be rendered as a server side route", () => {
  const text = "Server Side Button";
  render(<Button link={{ href: "https://www.google.com " }}>{text}</Button>);
  const foundLink = screen.getByRole("link", { name: text });
  expect(foundLink).toBeInTheDocument();
  expect(foundLink.nodeName).toEqual("A");
  expect(foundLink).toHaveClass("button");
});

it("can be rendered as a single page route", () => {
  const text = "Server Side Button";
  render(
    <MemoryRouter>
      <Button link={{ to: "/home" }}>{text}</Button>
      <Route path="/home">Home</Route>
    </MemoryRouter>
  );
  const foundLink = screen.getByRole("link", { name: text });
  expect(foundLink).toBeInTheDocument();
  expect(foundLink.nodeName).toEqual("A");
  expect(foundLink).toHaveClass("button");
  expect(screen.queryByText("Home")).toBeNull();
  user.click(foundLink);
  expect(screen.getByText("Home")).toBeInTheDocument();
});
