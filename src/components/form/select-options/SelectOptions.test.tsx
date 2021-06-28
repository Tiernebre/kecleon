import { render, screen } from "@testing-library/react";
import { SelectOptions } from "./SelectOptions";

it("renders no options if given an empty array", () => {
  render(<SelectOptions options={[]} />);
  expect(screen.queryAllByRole("option")).toEqual([]);
});
