import { Story, Meta } from "@storybook/react";

import { Fade, FadeProps } from "../components";

export default {
  component: Fade,
  title: "Example/Fade",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    durationInMillis: {
      control: {
        type: "number",
      },
    },
    visible: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "This message will fade away shortly...",
  },
} as Meta<FadeProps>;

const Template: Story<FadeProps> = (args) => <Fade {...args} />;

export const InteractiveFade = Template.bind({});
