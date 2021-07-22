import { Story, Meta } from "@storybook/react";

import {
  Dropdown,
  DropdownMenu,
  DropdownProps,
  DropdownTrigger,
} from "../components";
import { DropdownContent } from "../components/dropdown/content/DropdownContent";
import { DropdownItem } from "../components/dropdown/item";
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

const Template: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <DropdownTrigger
        htmlFor="dropdown-menu"
        onClick={() => console.log("Trigger!")}
      >
        Dropdown button
      </DropdownTrigger>
      <DropdownMenu id="dropdown-menu">
        <DropdownContent>
          <DropdownItem>Dropdown Item</DropdownItem>
          <DropdownItem>Other dropdown item</DropdownItem>
          <DropdownItem active>Active dropdown item</DropdownItem>
          <DropdownItem>With a divider</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {};
