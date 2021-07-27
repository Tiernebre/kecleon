import { Story, Meta } from "@storybook/react";
import { colors, sizes } from "..";
import { PageSpinner, PageSpinnerProps } from "../components";
import "./PageSpinner.stories.scss";

export default {
  component: PageSpinner,
  title: "Example/PageSpinner",
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
} as Meta<PageSpinnerProps>;

const Template: Story = (args) => <PageSpinner {...args} />;

export const InteractivePageSpinner = Template.bind({});
InteractivePageSpinner.args = {};
