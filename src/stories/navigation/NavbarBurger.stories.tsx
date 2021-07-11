import { Story, Meta } from "@storybook/react";
import "./NavbarItem.story.css";

import { NavbarBurger, NavbarBurgerProps } from "../../components";

export default {
  component: NavbarBurger,
  title: "Navigation/NavbarBurger",
  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<NavbarBurgerProps>;

const Template: Story<NavbarBurgerProps> = (args) => <NavbarBurger {...args} />;

export const InteractiveNavbarBurger = Template.bind({});
