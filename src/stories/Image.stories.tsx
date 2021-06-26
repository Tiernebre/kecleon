import { Story, Meta } from "@storybook/react";

import { Image, ImageProps } from "../components";

export default {
  title: "Example/Image",
  component: Image,
  argTypes: {
    rounded: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<ImageProps>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const InteractiveImage = Template.bind({});
InteractiveImage.args = {};
