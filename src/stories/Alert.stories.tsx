import { Story, Meta } from "@storybook/react";

import { Alert, AlertProps } from "../components";

export default {
  title: "Example/Alert",
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = () => (
  <Alert color="success" message="foo" />
);

export const InteractiveAlert = Template.bind({});
InteractiveAlert.args = {};
