import { Story, Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, FormField, Icon } from "../../components";
import { SemanticFormField } from "../../components/form/semantic-form-field";

export default {
  component: FormField,
  title: "Form/SemanticFormField",
} as Meta;

const StandardSemanticFormFieldTemplate: Story = () => (
  <form>
    <SemanticFormField
      id="semantic-form-field"
      input={{ type: "text" }}
      label="Standard Semantic Form Field"
      help="This is a help text"
    />
  </form>
);
export const StandardSemanticFormField = StandardSemanticFormFieldTemplate.bind(
  {}
);

const IconSemanticFormFieldTemplate: Story = () => (
  <form>
    <SemanticFormField
      id="semantic-form-field"
      control={{ hasIconsLeft: true }}
      input={{ type: "text", placeholder: "Home Input" }}
      label="Standard Semantic Form Field"
      help="This is a help text"
      icons={<Icon name="home" direction="left" />}
    />
  </form>
);
export const IconSemanticFormField = IconSemanticFormFieldTemplate.bind({});

const ValidationSemanticFormFieldTemplate: Story = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>();

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={submit}>
      <SemanticFormField
        id="semantic-form-field"
        control={{ hasIconsLeft: true }}
        input={{ type: "number", placeholder: "00" }}
        label="Standard Semantic Form Field"
        help="This is a help text"
        icons={<Icon name="home" direction="left" />}
        register={register("name", {
          valueAsNumber: true,
          required: {
            value: true,
            message: "Required",
          },
          max: {
            value: 60,
            message: "Can't do this bro",
          },
        })}
        error={errors.name}
      />
      <Button>Submit</Button>
    </form>
  );
};
export const ValidationSemanticFormField =
  ValidationSemanticFormFieldTemplate.bind({});

const ErrorSemanticFormFieldTemplate: Story = () => (
  <form>
    <SemanticFormField
      id="semantic-form-field"
      input={{ type: "text", placeholder: "Home Input" }}
      label="Standard Semantic Form Field"
      error={{ type: "required", message: "This field is required." }}
    />
  </form>
);
export const ErrorSemanticFormField = ErrorSemanticFormFieldTemplate.bind({});
