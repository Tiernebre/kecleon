import { Story, Meta } from "@storybook/react";
import { MemoryRouter } from "react-router";

import {
  NavbarItemLink,
  NavbarItemLinkProps,
} from "../../components/navigation/navbar-item";

export default {
  component: NavbarItemLink,
  title: "Navigation/NavbarItemLink",
  argTypes: {
    to: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    to: "https://www.google.com",
    children: "Navbar Item Link",
  },
} as Meta<NavbarItemLinkProps>;

const Template: Story<NavbarItemLinkProps> = (args) => (
  <MemoryRouter>
    <NavbarItemLink {...args} />
  </MemoryRouter>
);

export const InteractiveNavbarItemLink = Template.bind({});
InteractiveNavbarItemLink.args = {};
