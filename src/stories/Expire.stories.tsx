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
    fadeable: {
      control: {
        type: "boolean",
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

export const FadeableSetExpire = Template.bind({});
FadeableSetExpire.args = {
  fadeable: true,
  expiresInMillis: 5000,
  children:
    "This message will disappear within 5 seconds of being loaded. See ya later!",
};

export const LongFadeableSetExpire = Template.bind({});
FadeableSetExpire.args = {
  fadeable: true,
  expiresInMillis: 5000,
  fadeDurationInMillis: 10000,
  children:
    "This message will disappear within 5 seconds of being loaded, but will take 10 seconds to fully fade away. See ya later!",
};
