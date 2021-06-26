import { Story, Meta } from "@storybook/react";

import { ExpirableAlert, ExpirableAlertProps } from "../components";

export default {
  title: "Example/ExpirableAlert",
  component: ExpirableAlert,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    expiresInMillis: {
      control: {
        type: "number",
      },
    },
  },
} as Meta<ExpirableAlertProps>;

const Template: Story<ExpirableAlertProps> = (args) => (
  <ExpirableAlert {...args} />
);

export const SetExpire = Template.bind({});
SetExpire.args = {
  color: "danger",
  expiresInMillis: 5000,
  children:
    "This alert will disappear within 5 seconds of being loaded. See ya later!",
};
