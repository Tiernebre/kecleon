import { Story, Meta } from "@storybook/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavbarItemLink to="/about">About</NavbarItemLink>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/about">About</Route>
        <Route path="/dashboard">Dashboard</Route>
      </Switch>
    </div>
  </Router>
);

export const InteractiveNavbarItemLink = Template.bind({});
InteractiveNavbarItemLink.args = {};
