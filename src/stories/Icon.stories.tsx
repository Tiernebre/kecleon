import { Story, Meta } from "@storybook/react";

import { Icon } from "../components";

export default {
  title: "Example/Icon",
  component: Icon,
} as Meta;

const Template: Story = (args) => <Icon />;

export const Home = Template.bind({});
Home.args = {};
