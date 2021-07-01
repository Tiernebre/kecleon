import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Tag, TagProps } from "../components";
import { colors, sizes } from "../types";

export default {
  title: "Example/Tag",
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
    deletable: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Interactive Tag",
  },
} as Meta<TagProps>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const InteractiveTag = Template.bind({});
InteractiveTag.args = {};
