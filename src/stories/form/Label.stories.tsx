import { Story, Meta } from "@storybook/react";
import { Label } from "../../components";

export default {
  component: Label,
  title: "Form/Label",
} as Meta;

const Template: Story = () => (
  <form>
    <Label>Form Field Label</Label>
  </form>
);
export const StandardFormLabel = Template.bind({});
