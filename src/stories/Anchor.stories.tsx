import { Story, Meta } from "@storybook/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Anchor, AnchorProps } from "../components";

export default {
  component: Anchor,
  title: "Example/Anchor",
  argTypes: {
    to: {
      control: {
        type: "text",
      },
    },
    href: {
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
    children: "Navbar Item Link",
  },
} as Meta<AnchorProps>;

const SinglePageAppTemplate: Story<AnchorProps> = () => (
  <Router>
    <div>
      <p>Click on the links below, note: no page reloads!</p>
      <ul>
        <li>
          <Anchor to="/">Home</Anchor>
        </li>
        <li>
          <Anchor to="/about">About</Anchor>
        </li>
        <li>
          <Anchor to="/dashboard">Dashboard</Anchor>
        </li>
      </ul>

      <hr />

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

export const SinglePageAppAnchors = SinglePageAppTemplate.bind({});
SinglePageAppAnchors.args = {};
