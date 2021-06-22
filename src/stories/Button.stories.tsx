import { Story, Meta } from "@storybook/react";
import React, { Fragment } from "react";

import {
  Button,
  ButtonColor,
  ButtonColors,
  ButtonProps,
  ButtonSizes,
} from "../components";

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
    light: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
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
    children: "Button",
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const InteractiveButton = Template.bind({});
InteractiveButton.args = {};

const ColorButtonsTemplate: Story<ButtonProps> = () => (
  <Fragment>
    {ButtonColors.map((color: ButtonColor) => (
      <div className="block">
        <Button color={color}>{color} Button</Button>
      </div>
    ))}
  </Fragment>
);
export const ColoredButtons = ColorButtonsTemplate.bind({});
