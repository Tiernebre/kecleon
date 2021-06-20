import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

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
