import { Story, Meta } from "@storybook/react";

import { Input, InputProps } from "../components";
import { colors, sizes } from "../types";

export default {
  component: Input,
  title: "Example/Input",
  argTypes: {
    rounded: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
  },
} as Meta<InputProps>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InteractiveInput = Template.bind({});
InteractiveInput.args = {};
