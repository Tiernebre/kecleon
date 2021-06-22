import { Story, Meta } from "@storybook/react";

import { Notification, NotificationProps } from "../components";

export default {
  title: "Example/Notification",
  component: Notification,
} as Meta<NotificationProps>;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const DefaultNotification = Template.bind({});
DefaultNotification.args = {};
