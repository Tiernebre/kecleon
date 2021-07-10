import { Story, Meta } from "@storybook/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  MemoryRouter,
} from "react-router-dom";

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

const ServerSideTemplate: Story<AnchorProps> = () => (
  <Anchor href="https://www.google.com" target="_blank">
    Server Side Link. Click on me to load Google in a new tab.
  </Anchor>
);

export const ServerSideAnchor = ServerSideTemplate.bind({});
ServerSideAnchor.args = {};

const InteractiveTemplate: Story<AnchorProps> = (args) => (
  <MemoryRouter>
    <Anchor {...args} />
  </MemoryRouter>
);

export const InteractiveAnchor = InteractiveTemplate.bind({});
InteractiveAnchor.args = {
  children: "Interactive Anchor",
  href: "https://www.google.com",
};
