import { Story, Meta } from "@storybook/react";

import { Subtitle, SubtitleProps } from "../../components";
import { headingLevels } from "../../types";

export default {
  title: "Typography/Subtitle",
  component: Subtitle,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: headingLevels,
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    level: 5,
    children: "Subtitle",
  },
} as Meta<SubtitleProps>;

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

export const InteractiveSubtitle = Template.bind({});
InteractiveSubtitle.args = {};
