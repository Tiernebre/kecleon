import { Story, Meta } from "@storybook/react";

import { Box, BoxProps } from "../components";

export default {
  title: "Example/Box",
  component: Box,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<BoxProps>;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const PlaintextBox = Template.bind({});
PlaintextBox.args = {
  children: "Plain Text Box. Hello World!",
};
