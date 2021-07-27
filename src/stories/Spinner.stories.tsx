import { Story, Meta } from "@storybook/react";
import { colors, sizes } from "..";
import { Spinner, SpinnerProps } from "../components";

export default {
  component: Spinner,
  title: "Example/Spinner",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
  },
} as Meta<SpinnerProps>;

const Template: Story = (args) => <Spinner {...args} />;

export const InteractiveSpinner = Template.bind({});
InteractiveSpinner.args = {};
