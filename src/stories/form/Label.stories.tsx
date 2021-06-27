import { Story, Meta } from "@storybook/react";
import { Label } from "../../components";

export default {
  component: Label,
  title: "Form/Label",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Form Field Label",
  },
} as Meta;

const Template: Story = (args) => <Label {...args} />;
export const StandardFormLabel = Template.bind({});
