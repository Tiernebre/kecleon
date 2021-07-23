import { render, screen } from "@testing-library/react";
import { LevelItem } from ".";

it("renders given children elements", () => {
  const levelItemText = "Level Item";
  render(<LevelItem>{levelItemText}</LevelItem>);
  expect(screen.getByText(levelItemText)).toBeInTheDocument();
});
