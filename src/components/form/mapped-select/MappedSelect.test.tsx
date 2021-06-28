import { render, screen } from "@testing-library/react";
import { Option } from "../select-options";
import { MappedSelect } from "./MappedSelect";

type TestData = {
  id: number;
  name: string;
  createdAt: Date;
  active: boolean;
};

it("renders a data structure into a select with corresponding options", () => {
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
  expect(screen.queryAllByRole("option")).toHaveLength(2);
});
