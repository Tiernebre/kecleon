import { render, screen } from "@testing-library/react";
import { ButtonProps } from "../button";
import { IconButton } from "./IconButton";
import user from "@testing-library/user-event";
import { IconProps } from "../icon/Icon";

it("renders given children content", () => {
  const message = "Icon Button Text";
  render(<IconButton icon={{ name: "home" }}>{message}</IconButton>);
  const foundIconButton = screen.getByRole("button", { name: message });
  expect(foundIconButton).toBeInTheDocument();
});

it("renders the button with the correct provided details", () => {
  const message = "Icon Button Text";
  const onClick = jest.fn();
  const button: ButtonProps = {
    onClick,
  };
  render(
    <IconButton icon={{ name: "home" }} {...button}>
      {message}
    </IconButton>
  );
  const foundIconButton = screen.getByRole("button", { name: message });
  user.click(foundIconButton);
  expect(onClick).toHaveBeenCalled();
});

it("renders the icon with the correct provided details", () => {
  const message = "Icon Button Text";
  const iconMessage = "Icon Message";
  const icon: IconProps = {
    name: "home",
    message: iconMessage,
  };
  render(<IconButton icon={icon}>{message}</IconButton>);
  const foundIconMessage = screen.getByText(iconMessage);
  expect(foundIconMessage).toBeInTheDocument();
});
