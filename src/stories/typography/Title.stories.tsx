import { Story, Meta } from "@storybook/react";

import { Title, TitleProps } from "../../components";
import { headingLevels } from "../../types";

export default {
  title: "Typography/Title",
  component: Title,
  argTypes: {
    level: {
      control: {
        type: "select",
        options: headingLevels,
      },
      spaced: {
        type: "boolean",
      },
    },
  },
} as Meta<TitleProps>;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const InteractiveTitle = Template.bind({});
InteractiveTitle.args = {};
