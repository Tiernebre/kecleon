import { render, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";

it("displays a given placeholder", () => {
  const placeholder = "e.g. Hello World";
  render(<Textarea placeholder={placeholder} />);
  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
});
