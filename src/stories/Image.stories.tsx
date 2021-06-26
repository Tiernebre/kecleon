import { Story, Meta } from "@storybook/react";

import { fixedImageSizes, Image, ImageProps, imageRatios } from "../components";

export default {
  title: "Example/Image",
  component: Image,
  argTypes: {
    rounded: {
      control: {
        type: "boolean",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
    fixedSize: {
      control: {
        type: "select",
        options: fixedImageSizes,
      },
    },
    ratio: {
      control: {
        type: "select",
        options: imageRatios,
      },
    },
  },
  args: {
    src: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
  },
} as Meta<ImageProps>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const InteractiveImage = Template.bind({});
InteractiveImage.args = {};
