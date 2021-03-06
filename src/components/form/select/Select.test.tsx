import { render, screen, waitFor } from "@testing-library/react";
import { Color, colors, Size, sizes } from "../../../types";
import { Select } from "./Select";
import user from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { Button } from "../..";

it("has unopinionated styling by default", () => {
  render(<Select />);
  const select = screen.getByRole("combobox");
  expect(select.parentElement).toHaveClass("select", { exact: true });
});

it.each<Color>(colors)("renders in color %p", (color: Color) => {
  render(<Select color={color} />);
  const select = screen.getByRole("combobox");
  expect(select.parentElement).toHaveClass(`is-${color}`);
});

it.each<Size>(sizes)("renders in size %p", (size: Size) => {
  render(<Select size={size} />);
  const select = screen.getByRole("combobox");
  expect(select.parentElement).toHaveClass(`is-${size}`);
});

it("can support selecting multiple", () => {
  render(<Select multiple />);
  const select = screen.getByRole("listbox");
  expect(select).toBeInTheDocument();
  expect(select.parentElement).toHaveClass("is-multiple");
});

it("can support selecting single (with multiple as false)", () => {
  render(<Select multiple={false} />);
  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
  expect(select.parentElement).not.toHaveClass("is-multiple");
});

it("by default uses the value of the first option if no placeholder is provided", () => {
  render(
    <Select>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </Select>
  );
  const select = screen.getByRole("combobox");
  expect(select).toHaveValue("A");
});

it("by default uses an empty string value if a placeholder is provided", () => {
  render(
    <Select placeholder="placeholder">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </Select>
  );
  const select = screen.getByRole("combobox");
  expect(select).toHaveValue("");
});

it("can have its value changed when an option is chosen with a placeholder", () => {
  render(
    <Select placeholder="placeholder">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </Select>
  );
  const select = screen.getByRole("combobox");
  expect(select).toHaveValue("");
  user.selectOptions(select, ["A"]);
  expect(select).toHaveValue("A");
});

it("invokes a callback when a user changes their selected option", () => {
  const onChange = jest.fn();
  render(
    <Select onChange={onChange}>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </Select>
  );
  expect(onChange).not.toHaveBeenCalled();
  const getOptionByName = (name: string): HTMLOptionElement =>
    screen.getByRole("option", { name });
  expect(getOptionByName("B").selected).toBe(false);
  user.selectOptions(screen.getByRole("combobox"), ["B"]);
  expect(getOptionByName("A").selected).toBe(false);
  expect(getOptionByName("B").selected).toBe(true);
  expect(getOptionByName("C").selected).toBe(false);
  expect(onChange).toHaveBeenCalledTimes(1);
});

it("can be marked as invalid", () => {
  render(<Select invalid />);
  expect(screen.getByRole("combobox")).toBeInvalid();
});

it("can be marked as valid", () => {
  render(<Select invalid={false} />);
  expect(screen.getByRole("combobox")).toBeValid();
});

it("by default is valid", () => {
  render(<Select />);
  expect(screen.getByRole("combobox")).toBeValid();
});

it("can be marked as being described by another element", () => {
  const describedBy = "some-element";
  render(<Select describedBy={describedBy} />);
  expect(screen.getByRole("combobox")).toHaveAttribute(
    "aria-describedby",
    describedBy
  );
});

it("can have an id passed to it", () => {
  const id = "some-select";
  render(<Select id={id} />);
  expect(screen.getByRole("combobox")).toHaveAttribute("id", id);
});

it("can be registered as a React Hook Form uncontrolled component", async () => {
  type TestForm = {
    name: string;
  };
  type TestBedProps = {
    onSubmit: (data: TestForm) => void;
  };
  const TestBed = ({ onSubmit }: TestBedProps): JSX.Element => {
    const { register, handleSubmit } = useForm<TestForm>();

    const submit = (data: TestForm) => {
      onSubmit(data);
    };

    return (
      <form onSubmit={handleSubmit(submit)}>
        <Select register={register("name")}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </Select>
        <Button type="submit">Submit</Button>
      </form>
    );
  };
  const onSubmit = jest.fn();
  render(<TestBed onSubmit={onSubmit} />);
  const optionToChoose = "B";
  user.selectOptions(screen.getByRole("combobox"), [optionToChoose]);
  user.click(screen.getByRole("button"));
  await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  expect(screen.getByRole("combobox")).toHaveValue(optionToChoose);
  expect(onSubmit).toHaveBeenCalledWith({
    name: optionToChoose,
  });
});

it("displays a placeholder option that is chosen by default if placeholder is provided", () => {
  const placeholder = "Select from the MANY options below!";
  render(
    <Select placeholder={placeholder}>
      <option value="A">A</option>
      <option value="B">B</option>
    </Select>
  );
  const placeholderOption = screen.getByRole("option", { name: placeholder });
  expect(placeholderOption).toBeInTheDocument();
  const select = screen.getByRole("combobox");
  expect(select.firstChild?.isEqualNode(placeholderOption)).toEqual(true);
  expect(select).toHaveValue("");
});

it("does not display a placeholder option if placeholder is not provided", () => {
  render(
    <Select>
      <option value="A">A</option>
      <option value="B">B</option>
    </Select>
  );
  const select = screen.getByRole("combobox");
  const optionA = screen.getByRole("option", { name: "A" });
  expect(select).toHaveValue("A");
  expect(select.firstChild?.isEqualNode(optionA)).toEqual(true);
});

it("hides the placeholder option if the user chose a valid option", () => {
  const placeholder = "Select from the MANY options below!";
  render(
    <Select placeholder={placeholder} hidePlaceholderAfterChange>
      <option value="A">A</option>
      <option value="B">B</option>
    </Select>
  );
  const placeholderOption = screen.getByRole("option", { name: placeholder });
  expect(placeholderOption).toBeInTheDocument();
  expect(placeholderOption).toBeVisible();
  expect(screen.getAllByRole("option")).toHaveLength(3);
  const select = screen.getByRole("combobox");
  expect(select.firstChild?.isEqualNode(placeholderOption)).toEqual(true);
  expect(select).toHaveValue("");
  user.selectOptions(select, ["A"]);
  const removedPlaceholderOption = screen.queryByRole("option", {
    name: placeholder,
  });
  expect(removedPlaceholderOption).toBeNull();
  expect(screen.getAllByRole("option")).toHaveLength(2);
});

it("does not hide the placeholder option if the user chose a valid option but hiding was disabled", () => {
  const placeholder = "Select from the MANY options below!";
  render(
    <Select placeholder={placeholder} hidePlaceholderAfterChange={false}>
      <option value="A">A</option>
      <option value="B">B</option>
    </Select>
  );
  const placeholderOption = screen.getByRole("option", { name: placeholder });
  expect(placeholderOption).toBeInTheDocument();
  expect(placeholderOption).toBeVisible();
  expect(screen.getAllByRole("option")).toHaveLength(3);
  const select = screen.getByRole("combobox");
  expect(select.firstChild?.isEqualNode(placeholderOption)).toEqual(true);
  expect(select).toHaveValue("");
  user.selectOptions(select, ["A"]);
  const removedPlaceholderOption = screen.queryByRole("option", {
    name: placeholder,
  });
  expect(removedPlaceholderOption).not.toBeNull();
  expect(screen.getAllByRole("option")).toHaveLength(3);
});

it("does not hide the placeholder option if the user chose a valid option by default", () => {
  const placeholder = "Select from the MANY options below!";
  render(
    <Select placeholder={placeholder}>
      <option value="A">A</option>
      <option value="B">B</option>
    </Select>
  );
  const placeholderOption = screen.getByRole("option", { name: placeholder });
  expect(placeholderOption).toBeInTheDocument();
  expect(placeholderOption).toBeVisible();
  expect(screen.getAllByRole("option")).toHaveLength(3);
  const select = screen.getByRole("combobox");
  expect(select.firstChild?.isEqualNode(placeholderOption)).toEqual(true);
  expect(select).toHaveValue("");
  user.selectOptions(select, ["A"]);
  const removedPlaceholderOption = screen.queryByRole("option", {
    name: placeholder,
  });
  expect(removedPlaceholderOption).not.toBeNull();
  expect(screen.getAllByRole("option")).toHaveLength(3);
});
