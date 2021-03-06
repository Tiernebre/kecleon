import { render, screen, waitFor } from "@testing-library/react";
import { colors } from "../../..";
import { Color, Size, sizes } from "../../../types";
import { Input } from ".";
import user from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { Button } from "../../button";

it("is entirely unopinionated if not given any props", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass("input", { exact: true });
});

it("can be disabled", () => {
  render(<Input disabled />);
  const input = screen.getByRole("textbox");
  expect(input).toBeDisabled();
});

it("can be readonly", () => {
  render(<Input readOnly />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("readonly");
});

it("can have a placeholder", () => {
  const placeholder = "Test Placeholder";
  render(<Input placeholder={placeholder} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("placeholder", placeholder);
});

it("can have a specific type", () => {
  render(<Input type="number" />);
  const input = screen.getByRole("spinbutton");
  expect(input).toHaveAttribute("type", "number");
});

it("can bind to a given callback", () => {
  const onInput = jest.fn();
  render(<Input onInput={onInput} />);
  expect(onInput).not.toHaveBeenCalled();
  const input = screen.getByRole("textbox");
  user.type(input, "hello world");
  expect(onInput).toHaveBeenCalled();
});

it.each<Color>(colors)("renders with color %p", (color: Color) => {
  render(<Input color={color} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass(`is-${color}`);
});

it.each<Size>(sizes)("renders in size %p", (size: Size) => {
  render(<Input size={size} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass(`is-${size}`);
});

it("is displayed as rounded if provided", () => {
  render(<Input rounded />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass("is-rounded");
});

it("is not displayed as rounded if provided as false", () => {
  render(<Input rounded={false} />);
  const input = screen.getByRole("textbox");
  expect(input).not.toHaveClass("is-rounded");
});

it("is displayed as static if provided", () => {
  render(<Input isStatic />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveClass("is-static");
});

it("is not displayed as static if provided as false", () => {
  render(<Input isStatic={false} />);
  const input = screen.getByRole("textbox");
  expect(input).not.toHaveClass("is-static");
});

it("can be registered as a React Hook Form uncontrolled component", async () => {
  type TestForm = {
    name: string;
    index: number;
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
        <Input type="text" register={register("name")} />
        <Input
          type="number"
          register={register("index", {
            valueAsNumber: true,
          })}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  };
  const onSubmit = jest.fn();
  render(<TestBed onSubmit={onSubmit} />);
  const name = "Test Name";
  const index = 12;
  user.type(screen.getByRole("textbox"), name);
  user.type(screen.getByRole("spinbutton"), index.toString());
  user.click(screen.getByRole("button"));
  await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  expect(onSubmit).toHaveBeenCalledWith({
    name,
    index,
  });
});

it("can be marked as invalid", () => {
  render(<Input invalid />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInvalid();
});

it("can be marked as valid", () => {
  render(<Input invalid={false} />);
  const input = screen.getByRole("textbox");
  expect(input).toBeValid();
});

it("by default is valid", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  expect(input).toBeValid();
});

it("can be marked as described by", () => {
  const describedBy = "some-other-element";
  render(<Input describedBy={describedBy} />);
  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("aria-describedby", describedBy);
});

it("by default is not described by anything", () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  expect(input).not.toHaveAttribute("aria-describedby");
});
