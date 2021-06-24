import { Story, Meta } from "@storybook/react";
import { Alert, AlertProps } from "../components";

export default {
  component: Alert,
  title: "Example/Alert",
  argTypes: {
    color: {
      control: "select",
      options: ["success", "danger", "warning"],
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "This is an interactive test alert!",
  },
} as Meta<AlertProps>;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const InteractiveAlert = Template.bind({});
InteractiveAlert.args = {};
