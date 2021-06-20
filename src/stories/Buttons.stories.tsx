import { Story, Meta } from "@storybook/react";

import { Buttons } from "../components";

export default {
  title: "Example/Buttons",
  component: Buttons,
} as Meta;

const Template: Story = (args) => <Buttons></Buttons>;

export const DefaultButtons = Template.bind({});
DefaultButtons.args = {};
