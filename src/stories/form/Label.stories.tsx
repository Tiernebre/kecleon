import { Story, Meta } from "@storybook/react";
import { Input, Label } from "../../components";

export default {
  component: Label,
  title: "Form/Label",
} as Meta;

const Template: Story = () => (
  <form>
    <Label>Form Field Label</Label>
    <Input type="text" value="Form Field Input"></Input>
  </form>
);
export const StandardFormLabel = Template.bind({});
