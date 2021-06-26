import { Story, Meta } from "@storybook/react";

import { ExpirableAlert, ExpirableAlertProps } from "../components";

export default {
  component: ExpirableAlert,
  title: "Example/ExpirableAlert",
  argTypes: {
    expiresInMillis: {
      control: {
        type: "number",
      },
    },
    children: {
      control: {
        type: "text",
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
