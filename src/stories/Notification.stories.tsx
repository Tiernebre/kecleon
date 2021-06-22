import { Story, Meta } from "@storybook/react";

import { Notification, NotificationProps } from "../components";
import { colors } from "../types";

export default {
  title: "Example/Notification",
  component: Notification,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
    light: {
      control: {
        type: "boolean",
      },
    },
    closable: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "This is a test notification!",
  },
} as Meta<NotificationProps>;

const InteractiveNotificationTemplate: Story<NotificationProps> = (args) => (
  <Notification {...args} />
);

export const InteractiveNotification = InteractiveNotificationTemplate.bind({});
InteractiveNotification.args = {};
