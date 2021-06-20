import { Story, Meta } from "@storybook/react";

import { IconButton } from "../components";

export default {
  title: "Example/IconButton",
  component: IconButton,
} as Meta;

const Template: Story = (args) => <IconButton {...args} />;

export const InteractiveIconButton = Template.bind({});
InteractiveIconButton.args = {};
