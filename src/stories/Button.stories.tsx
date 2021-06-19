import { Story, Meta } from "@storybook/react";

import { Button, ButtonColors, ButtonProps } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ButtonColors,
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const White = Template.bind({});
White.args = {
  color: "white",
};
export const Black = Template.bind({});
Black.args = {
  color: "black",
};
