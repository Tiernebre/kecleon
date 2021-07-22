import { Story, Meta } from "@storybook/react";

import { Dropdown, DropdownProps } from "../components";
import { directions } from "../types";

export default {
  component: Dropdown,
  title: "Example/Dropdown",
  argTypes: {
    hoverable: {
      control: {
        type: "boolean",
      },
    },
    active: {
      control: {
        type: "boolean",
      },
    },
    direction: {
      control: {
        type: "select",
        options: directions,
      },
    },
    up: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<DropdownProps>;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {};
