import { Story, Meta } from "@storybook/react";

import { Expire, ExpireProps } from "../components";

export default {
  component: Expire,
  title: "Example/Expire",
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
} as Meta<ExpireProps>;

const Template: Story<ExpireProps> = (args) => <Expire {...args} />;

export const SetExpire = Template.bind({});
SetExpire.args = {
  expiresInMillis: 5000,
  children:
    "This message will disappear within 5 seconds of being loaded. See ya later!",
};
