import { render, screen } from "@testing-library/react";
import React from "react";
import { Level } from ".";

it("by default has unopinionated styling", () => {
  const levelText = "Level";
  render(<Level>{levelText}</Level>);
  expect(screen.getByText(levelText)).toHaveClass("level", { exact: true });
});
