import { Story, Meta } from "@storybook/react";

import { Icon, IconProps } from "../components";

export default {
  title: "Example/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Home = Template.bind({});
Home.args = {
  name: "home",
};
