import { Story, Meta } from "@storybook/react";
import { FormField, Icon } from "../../components";
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
