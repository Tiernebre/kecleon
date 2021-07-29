import { screen, render } from "@testing-library/react";
import { DropdownItem } from "./DropdownItem";
import user from "@testing-library/user-event";
import { IconProps } from "../..";

it("renders given text", () => {
  const text = "Dropdown Item";
  render(<DropdownItem>{text}</DropdownItem>);
  expect(screen.getByText(text)).toBeInTheDocument();
});

it("can be active", () => {
  const text = "Dropdown Item";
  render(<DropdownItem active>{text}</DropdownItem>);
  expect(screen.getByText(text)).toHaveClass("is-link");
  expect(screen.getByText(text)).not.toHaveClass("is-white");
});

it("can be inactive", () => {
  const text = "Dropdown Item";
  render(<DropdownItem active={false}>{text}</DropdownItem>);
  expect(screen.getByText(text)).not.toHaveClass("is-link");
  expect(screen.getByText(text)).toHaveClass("is-white");
});

it("can bind to click event", () => {
  const text = "Dropdown Item";
  const onClick = jest.fn();
  render(<DropdownItem onClick={onClick}>{text}</DropdownItem>);
  user.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalled();
});

it("can be rendered with an icon", () => {
  const iconMessage = "Icon Message";
  const icon: IconProps = {
    name: "home",
    message: iconMessage,
  };
  render(<DropdownItem icon={icon}>Dropdown Item</DropdownItem>);
  const foundIconMessage = screen.getByText(iconMessage);
  expect(foundIconMessage).toBeInTheDocument();
});

it("can be rendered with a divider", () => {
  render(<DropdownItem divider>Dropdown Item</DropdownItem>);
  expect(screen.getByRole("separator")).toBeInTheDocument();
});

it("can be rendered without a divider explicitly", () => {
  render(<DropdownItem divider={false}>Dropdown Item</DropdownItem>);
  expect(screen.queryByRole("separator")).toBeNull();
});

it("is rendered without a divider by default", () => {
  render(<DropdownItem>Dropdown Item</DropdownItem>);
  expect(screen.queryByRole("separator")).toBeNull();
});
