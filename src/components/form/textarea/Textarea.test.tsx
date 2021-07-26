import { render, screen, waitFor } from "@testing-library/react";
import { Textarea } from "./Textarea";
import user from "@testing-library/user-event";
import { Color, colors, Size, sizes } from "../../../types";
import { useForm } from "react-hook-form";
import { Button } from "../..";

it("displays without opinionated styling by default", () => {
  render(<Textarea />);
  expect(screen.getByRole("textbox")).toHaveClass("textarea", { exact: true });
});

it("displays a given placeholder", () => {
  const placeholder = "e.g. Hello World";
  render(<Textarea placeholder={placeholder} />);
  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
});

it("displays with the given amount of rows for height", () => {
  const rows = 10;
  render(<Textarea rows={rows} />);
  expect(screen.getByRole("textbox")).toHaveAttribute("rows", rows.toString());
});

it("can be given an id", () => {
  const id = "some-textarea";
  render(<Textarea id={id} />);
  expect(screen.getByRole("textbox")).toHaveAttribute("id", id);
});

it("can bind to a callback for events", () => {
  const onInput = jest.fn();
  render(<Textarea onInput={onInput} />);
  expect(onInput).not.toHaveBeenCalled();
  const textarea = screen.getByRole("textbox");
  user.type(textarea, "Hello World!");
  expect(onInput).toHaveBeenCalled();
});

it.each<Size>(sizes)("can render in size %p", (size: Size) => {
  render(<Textarea size={size} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveClass(`is-${size}`);
});

it.each<Color>(colors)("can render in color %p", (color: Color) => {
  render(<Textarea color={color} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveClass(`is-${color}`);
});

it("displays with fixed height if fixed is true", () => {
  render(<Textarea fixed />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveClass(`has-fixed-size`);
});

it("does not display with fixed height if fixed is false", () => {
  render(<Textarea fixed={false} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).not.toHaveClass(`has-fixed-size`);
});

it("can be marked as invalid", () => {
  render(<Textarea invalid />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeInvalid();
});

it("can be marked as valid", () => {
  render(<Textarea invalid={false} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeValid();
});

it("by default is valid", () => {
  render(<Textarea />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toBeValid();
});

it("can mark as associated id to be described by", () => {
  const describedBy = "some-other-element";
  render(<Textarea describedBy={describedBy} />);
  const textarea = screen.getByRole("textbox");
  expect(textarea).toHaveAttribute("aria-describedby", describedBy);
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
        <Textarea register={register("name")} />
        <Button type="submit">Submit</Button>
      </form>
    );
  };
  const onSubmit = jest.fn();
  render(<TestBed onSubmit={onSubmit} />);
  const name = "Test Name";
  user.type(screen.getByRole("textbox"), name);
  user.click(screen.getByRole("button"));
  await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  expect(onSubmit).toHaveBeenCalledWith({
    name,
  });
});
