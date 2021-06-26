import { Story, Meta } from "@storybook/react";
import { FormControl, FormControlProps, Icon, Input } from "../components";

export default {
  title: "Example/FormControl",
  component: FormControl,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<FormControlProps>;

const Template: Story<FormControlProps> = (args) => <FormControl {...args} />;
export const InteractiveFormControl = Template.bind({});

const InputControlTemplate: Story<FormControlProps> = (args) => (
  <FormControl>
    <Input placeholder="Input Control"></Input>
  </FormControl>
);
export const InputControl = InputControlTemplate.bind({});

const InputControlWithIconsTemplate: Story<FormControlProps> = (args) => (
  <FormControl hasIconsLeft hasIconsRight>
    <Icon name="home" direction="left" />
    <Icon name="angle-right" direction="right" />
    <Input placeholder="Input Control" />
  </FormControl>
);
export const InputControlWithIcons = InputControlWithIconsTemplate.bind({});
