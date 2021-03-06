import { screen, render } from "@testing-library/react";
import { NavbarMenu } from "./NavbarMenu";

it("renders with unopinionated styling by default", () => {
  const text = "text";
  render(<NavbarMenu>{text}</NavbarMenu>);
  expect(screen.getByText(text)).toHaveClass("navbar-menu", { exact: true });
});

it("renders a navbar start if provided", () => {
  const startText = "Start";
  render(<NavbarMenu start={startText} />);
  const foundStart = screen.getByText(startText);
  expect(foundStart).toBeInTheDocument();
  expect(foundStart).toHaveClass("navbar-start");
});

it("renders a navbar end if provided", () => {
  const endText = "End";
  render(<NavbarMenu end={endText} />);
  const foundEnd = screen.getByText(endText);
  expect(foundEnd).toBeInTheDocument();
  expect(foundEnd).toHaveClass("navbar-end");
});

it("renders a navbar start end if both are provided", () => {
  const startText = "Start";
  const endText = "End";
  render(<NavbarMenu start={startText} end={endText} />);
  const foundStart = screen.getByText(startText);
  expect(foundStart).toBeInTheDocument();
  expect(foundStart).toHaveClass("navbar-start");
  const foundEnd = screen.getByText(endText);
  expect(foundEnd).toBeInTheDocument();
  expect(foundEnd).toHaveClass("navbar-end");
});

it("renders given children", () => {
  const text = "navbar menu";
  render(<NavbarMenu>{text}</NavbarMenu>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("can be rendered as active", () => {
  const text = "navbar menu";
  render(<NavbarMenu active>{text}</NavbarMenu>);
  expect(screen.getByText(text)).toHaveClass("is-active");
});
