import { Story, Meta } from "@storybook/react";

import {
  ButtonColors,
  ButtonSizes,
  IconButton,
  IconButtonProps,
} from "../components";

export default {
  title: "Example/IconButton",
  component: IconButton,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: ButtonColors,
      },
    },
    light: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
        options: ButtonSizes,
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    icon: {
      name: "home",
    },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const InteractiveIconButton = Template.bind({});
InteractiveIconButton.args = {};
