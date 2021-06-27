import { Story, Meta } from "@storybook/react";
import { Help } from "../../components";

export default {
  component: Help,
  title: "Form/Help",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Form Field Help Message",
  },
} as Meta;

const Template: Story = (args) => <Help {...args} />;
export const StandardFormFieldHelp = Template.bind({});
