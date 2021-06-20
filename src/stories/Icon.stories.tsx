import { Story, Meta } from "@storybook/react";

import { Icon, IconProps } from "../components";
import { colors } from "../types";

export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const InteractiveIcon = Template.bind({});
InteractiveIcon.args = {
  name: "home",
};
