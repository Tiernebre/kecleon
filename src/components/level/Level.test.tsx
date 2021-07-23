import { render, screen } from "@testing-library/react";
import { Level } from ".";

it("by default has unopinionated styling", () => {
  const levelText = "Level";
  render(<Level>{levelText}</Level>);
  expect(screen.getByText(levelText)).toHaveClass("level", { exact: true });
});

it("supports mobile", () => {
  const levelText = "Level";
  render(<Level mobile>{levelText}</Level>);
  expect(screen.getByText(levelText)).toHaveClass("is-mobile");
});

it("can specifically not support mobile", () => {
  const levelText = "Level";
  render(<Level mobile={false}>{levelText}</Level>);
  expect(screen.getByText(levelText)).not.toHaveClass("is-mobile");
});