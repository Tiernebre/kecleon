import { render, screen } from "@testing-library/react";
import { ButtonProps } from "../button";
import { IconButton } from "./IconButton";
import user from "@testing-library/user-event";

it("renders given children content", () => {
  const message = "Icon Button Text";
  render(
    <IconButton button={{}} icon={{ name: "home" }}>
      {message}
    </IconButton>
  );
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
    <IconButton button={button} icon={{ name: "home" }}>
      {message}
    </IconButton>
  );
  const foundIconButton = screen.getByRole("button", { name: message });
  user.click(foundIconButton);
  expect(onClick).toHaveBeenCalled();
});
