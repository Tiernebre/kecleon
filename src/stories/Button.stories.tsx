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
    isLight: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Button",
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {};

export const White = Template.bind({});
White.args = {
  color: "white",
};

export const Black = Template.bind({});
Black.args = {
  color: "black",
};

export const Dark = Template.bind({});
Dark.args = {
  color: "dark",
};

export const Light = Template.bind({});
Light.args = {
  color: "light",
};

export const Text = Template.bind({});
Text.args = {
  color: "text",
};

export const Ghost = Template.bind({});
Ghost.args = {
  color: "ghost",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Link = Template.bind({});
Link.args = {
  color: "link",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
};
