import { Story, Meta } from "@storybook/react";
import { FormControl, FormField, Help, Input, Label } from "../../components";

export default {
  component: FormField,
  title: "Form/FormField",
} as Meta;

const Template: Story = () => (
  <form>
    <FormField>
      <Label>Form Field Label</Label>
      <FormControl>
        <Input type="text" value="Form Field Input"></Input>
      </FormControl>
      <Help>Form Field Help</Help>
    </FormField>
  </form>
);
export const StandardFormField = Template.bind({});
