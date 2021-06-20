import { render, screen } from "@testing-library/react";
import { Color, colors, Size, sizes } from "../../types";
import { Icon, IconFontSize, iconFontSizes } from "./Icon";

it("renders an icon", () => {
  const message = "Home";
  render(<Icon name="home" message={message} />);
  const icon = screen.getByTitle(message);
  expect(icon).toBeInTheDocument();
});

it.each<Color>(colors)("renders an icon with color = %p", (color: Color) => {
  const message = "Home";
  render(<Icon name="home" message={message} color={color} />);
  const icon = screen.getByTitle(message);
  expect(icon).toHaveClass(`has-text-${color}`);
});

it("renders an icon with a border", () => {
  const message = "Home";
  render(<Icon name="home" message={message} bordered />);
  const icon = screen.getByTitle(message);
  expect(icon).toHaveClass("fa-border");
});

it("renders an icon without a border", () => {
  const message = "Home";
  render(<Icon name="home" message={message} bordered={false} />);
  const icon = screen.getByTitle(message);
  expect(icon).not.toHaveClass("fa-border");
});

it("renders an icon without a border by default", () => {
  const message = "Home";
  render(<Icon name="home" message={message} />);
  const icon = screen.getByTitle(message);
  expect(icon).not.toHaveClass("fa-border");
});

it.each<Size>(sizes)(
  "renders an icon with container size = %p",
  (containerSize: Size) => {
    const message = "Set Size";
    render(
      <Icon name="home" message={message} containerSize={containerSize} />
    );
    const icon = screen.getByTitle(message);
    expect(icon.parentElement).toHaveClass(`is-${containerSize}`);
  }
);

it("render an icon without a set container size if it is not provided", () => {
  const message = "Set Size";
  render(<Icon name="home" message={message} />);
  const icon = screen.getByTitle(message);
  expect(icon.parentElement).toHaveClass("icon", { exact: true });
});

it.each<IconFontSize>(iconFontSizes)(
  "renders an icon with font size = %p",
  (fontSize: IconFontSize) => {
    const message = "Set Size";
    render(<Icon name="home" message={message} fontSize={fontSize} />);
    const icon = screen.getByTitle(message);
    expect(icon).toHaveClass(`fa-${fontSize}`);
  }
);

it("renders the message for screen readers only", () => {
  const message = "Create Test";
  render(<Icon name="plus" message={message} />);
  const screenOnlyMessage = screen.getByText(message);
  expect(screenOnlyMessage).toHaveClass("is-sr-only");
});

it("does not render the screen reader message if a message is not provided", () => {
  render(<Icon name="minus" />);
  const screenOnlyMessage = screen.queryByTestId("icon-screen-reader-message");
  expect(screenOnlyMessage).toBeNull();
});
