import { Story, Meta } from "@storybook/react";
import { Spinner } from "../components";

export default {
  component: Spinner,
  title: "Example/Spinner",
} as Meta;

const Template: Story = () => <Spinner color="primary" size="medium" />;

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {};
