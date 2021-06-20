import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

it("renders an icon", () => {
  const message = "Home";
  render(<Icon name="home" message={message} />);
  const icon = screen.getByTitle(message);
  expect(icon).toBeInTheDocument();
});
