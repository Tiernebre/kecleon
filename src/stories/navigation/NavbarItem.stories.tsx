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
  },
  args: {
    children: "Navbar Item",
  },
} as Meta<NavbarItemProps>;

const Template: Story<NavbarItemProps> = (args) => <NavbarItem {...args} />;

export const InteractiveNavbarItem = Template.bind({});
