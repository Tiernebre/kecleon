import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import {
  Button,
  Buttons,
  NavbarItem,
  SmartNavbar,
  SmartNavbarProps,
} from "../../components";

export default {
  component: SmartNavbar,
  title: "Navigation/SmartNavbar",
} as Meta<SmartNavbarProps>;

const Template: Story<SmartNavbarProps> = () => (
  <SmartNavbar
    brandItems={
      <NavbarItem link={{ href: "https://bulma.io" }}>
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Logo"
          width="112"
          height="28"
        />
      </NavbarItem>
    }
    menuStartItems={
      <Fragment>
        <NavbarItem link={{ href: "https://bulma.io" }}>Home</NavbarItem>
        <NavbarItem link={{ href: "https://bulma.io" }}>
          Documentation
        </NavbarItem>
      </Fragment>
    }
    menuEndItems={
      <NavbarItem>
        <Buttons>
          <Button color="primary">
            <strong>Sign up</strong>
          </Button>
          <Button color="light">Log in</Button>
        </Buttons>
      </NavbarItem>
    }
  />
);

export const StandardSmartNavbar = Template.bind({});
