import { Story, Meta } from "@storybook/react";

import { HeadingGroup, HeadingGroupProps } from "../../components";

export default {
  component: HeadingGroup,
  title: "Typography/HeadingGroup",
  argTypes: {
    level: {
      control: {
        type: "select",
        options: [1, 2, 3, 4],
      },
    },
    spaced: {
      control: {
        type: "boolean",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    subtitle: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    level: 3,
    title: "Heading Group",
  },
} as Meta<HeadingGroupProps>;

const Template: Story<HeadingGroupProps> = (args) => <HeadingGroup {...args} />;

export const InteractiveHeadingGroup = Template.bind({});
InteractiveHeadingGroup.args = {};
