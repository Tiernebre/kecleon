import { render, screen, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { Button } from "../..";
import { Icon } from "../../icon";
import { FormControlProps } from "../form-control";
import { InputProps } from "../input";
import { SemanticFormField, SemanticFormFieldProps } from "./SemanticFormField";
import user from "@testing-library/user-event";

it("displays the given label", () => {
  const id = "test-semantic-form-field";
  const input: InputProps = {
    type: "text",
  };
  const label = "Test Label";
  const props: SemanticFormFieldProps = {
    id,
    input,
    label,
  };
  render(<SemanticFormField {...props} />);
  const inputAssociatedWithLabel = screen.getByLabelText(label);
  expect(inputAssociatedWithLabel).toBeInTheDocument();
  expect(inputAssociatedWithLabel).toBeValid();
});

it("displays a help message if provided", () => {
  const id = "test-semantic-form-field";
  const input: InputProps = {
    type: "text",
  };
  const help = "Help";
  const label = "Test Label";
  const props: SemanticFormFieldProps = {
    id,
    input,
    label,
    help,
  };
  render(<SemanticFormField {...props} />);
  const helpMessage = screen.getByText(help);
  expect(helpMessage).toBeInTheDocument();
  expect(helpMessage).toHaveAttribute("id", `${id}-help`);
  expect(screen.getByRole("textbox")).toHaveAttribute(
    "aria-describedby",
    `${id}-help`
  );
});

it("displays given icons", () => {
  const id = "test-semantic-form-field";
  const control: FormControlProps = {
    hasIconsLeft: true,
  };
  const input: InputProps = {
    type: "text",
  };
  const help = "Help";
  const label = "Test Label";
  const iconMessage = "Hi, I'm an icon";
  const icon = <Icon name="home" direction="left" message={iconMessage} />;
  const props: SemanticFormFieldProps = {
    id,
    control,
    input,
    label,
    help,
    icons: icon,
  };
  render(<SemanticFormField {...props} />);
  expect(screen.getByText(iconMessage)).toBeInTheDocument();
});

it("is formatted to handle an error", () => {
  const id = "test-semantic-form-field";
  const input: InputProps = {
    type: "text",
  };
  const label = "Test Label";
  const error = {
    type: "required",
    message: "This field is required. Please fill in information",
  };
  const props: SemanticFormFieldProps = {
    id,
    input,
    label,
    error,
  };
  render(<SemanticFormField {...props} />);
  expect(screen.getByRole("textbox")).toBeInvalid();
  expect(screen.getByText(error.message)).toBeInTheDocument();
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
        <SemanticFormField
          id="name"
          input={{ type: "text" }}
          label="Name"
          register={register("name")}
        />
        <SemanticFormField
          id="index"
          input={{ type: "number" }}
          label="Index"
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
  const name = "Test Validated Semantic Form Field Name";
  const index = 123;
  user.type(screen.getByRole("textbox"), name);
  user.type(screen.getByRole("spinbutton"), index.toString());
  user.click(screen.getByRole("button"));
  await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  expect(onSubmit).toHaveBeenCalledWith({
    name,
    index,
  });
});
