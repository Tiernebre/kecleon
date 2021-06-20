import { Story, Meta } from "@storybook/react";

import { Button, Buttons } from "../components";

export default {
  title: "Example/Buttons",
  component: Buttons,
} as Meta;

const Template: Story = () => (
  <Buttons>
    <Button color="success">Submit</Button>
    <Button color="danger">Cancel</Button>
    <Button color="warning">Re-Do</Button>
  </Buttons>
);

export const DefaultButtons = Template.bind({});
DefaultButtons.args = {};
