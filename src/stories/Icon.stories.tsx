import { Story, Meta } from "@storybook/react";

import { Icon, iconFontSizes, IconProps } from "../components";
import { colors, sizes } from "../types";

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
    containerSize: {
      control: {
        type: "select",
        options: sizes,
      },
    },
    fontSize: {
      control: {
        type: "select",
        options: iconFontSizes,
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const InteractiveIcon = Template.bind({});
InteractiveIcon.args = {
  name: "home",
  message: "Go Home",
};
