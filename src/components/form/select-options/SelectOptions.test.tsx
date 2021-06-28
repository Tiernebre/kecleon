import { render, screen } from "@testing-library/react";
import { SelectOptions } from "./SelectOptions";

it("renders no options if given an empty array", () => {
  render(<SelectOptions options={[]} />);
  expect(screen.queryAllByRole("option")).toEqual([]);
});

it("renders a single option if given an array with one", () => {
  const option = {
    label: "Option 1",
    value: "1",
  };
  render(<SelectOptions options={[option]} />);
  expect(
    screen.getByRole("option", { name: option.label })
  ).toBeInTheDocument();
});

it("renders given options", () => {
  const optionOne = {
    label: "Option 1",
    value: "1",
  };
  const optionTwo = {
    label: "Option 2",
    value: "2",
  };
  render(<SelectOptions options={[optionOne, optionTwo]} />);
  expect(screen.getAllByRole("option")).toHaveLength(2);
  expect(
    screen.getByRole("option", { name: optionOne.label })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("option", { name: optionTwo.label })
  ).toBeInTheDocument();
});
