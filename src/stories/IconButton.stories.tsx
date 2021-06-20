import { Story, Meta } from "@storybook/react";

import { IconButton, IconButtonProps } from "../components";

export default {
  title: "Example/IconButton",
  component: IconButton,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    button: {
      color: "primary",
    },
    icon: {
      name: "home",
    },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const InteractiveIconButton = Template.bind({});
InteractiveIconButton.args = {};
