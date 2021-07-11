import { Story, Meta } from "@storybook/react";

import { NavbarBurger, NavbarBurgerProps } from "../../components";

export default {
  title: "Navigation/NavbarBurger",
  component: NavbarBurger,
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
