import { Story, Meta } from "@storybook/react";
import { Radio, RadioProps } from "../../components";
import { CheckboxProps } from "../../components/form/checkbox";

export default {
  title: "Form/Radio",
  component: Radio,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Test Radio Input",
  },
} as Meta<CheckboxProps>;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;
export const InteractiveRadio = Template.bind({});
