import { Story, Meta } from "@storybook/react";

import { Fade, FadeProps } from "../components";

export default {
  title: "Example/Fade",
  component: Fade,
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
    visible: true,
    children:
      "This message will fade in and out depending on visibility. Try interacting with the control knob for visible below to see!",
    durationInMillis: 5000,
  },
} as Meta<FadeProps>;

const Template: Story<FadeProps> = (args) => <Fade {...args} />;

export const InteractiveFade = Template.bind({});
