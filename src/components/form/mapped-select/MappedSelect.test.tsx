import { render, screen } from "@testing-library/react";
import { Option } from "../select-options";
import { MappedSelect } from "./MappedSelect";

type TestData = {
  id: number;
  name: string;
  createdAt: Date;
  active: boolean;
};

it("renders no options if an empty array is provided", () => {
  render(<MappedSelect options={[]} mapToOption={jest.fn()} />);
  expect(screen.queryAllByRole("option")).toHaveLength(0);
});

it("renders a list of data structures into a select with corresponding options", () => {
  const options: TestData[] = [
    {
      id: 1,
      name: "Test 1",
      createdAt: new Date(),
      active: true,
    },
    {
      id: 2,
      name: "Test 2",
      createdAt: new Date(),
      active: true,
    },
  ];
  const mapToOption = (testData: TestData): Option => ({
    label: testData.name,
    value: testData.id,
  });
  render(<MappedSelect options={options} mapToOption={mapToOption} />);
  expect(screen.getAllByRole("option")).toHaveLength(2);
  options.forEach((option) => {
    const optionFound = screen.getByRole("option", { name: option.name });
    expect(optionFound).toBeInTheDocument();
    expect(optionFound).toHaveAttribute("value", option.id.toString());
  });
});
