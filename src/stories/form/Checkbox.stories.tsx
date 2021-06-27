import { Story, Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "../../components/form/checkbox";

export default {
  component: Checkbox,
  title: "Form/Checkbox",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Test Checkbox Input",
  },
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
export const InteractiveCheckbox = Template.bind({});
