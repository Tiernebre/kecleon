import { Story, Meta } from "@storybook/react";

import { NavbarItem, NavbarItemProps } from "../../components";

export default {
  component: NavbarItem,
  title: "Navigation/NavbarItem",
  argTypes: {
    link: {
      control: {
        type: "object",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    expanded: {
      control: {
        type: "boolean",
      },
    },
    tab: {
      control: {
        type: "boolean",
      },
    },
    active: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Navbar Item",
  },
} as Meta<NavbarItemProps>;

const Template: Story<NavbarItemProps> = (args) => <NavbarItem {...args} />;

export const InteractiveNavbarItem = Template.bind({});
