import { Story, Meta } from "@storybook/react";

import { Container, ContainerProps } from "../components";

export default {
  component: Container,
  title: "Example/Container",
  argTypes: {
    fluid: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<ContainerProps>;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>{args.children}</Container>
);

export const InteractiveContainer = Template.bind({});
InteractiveContainer.args = {
  children: "This is an interactive container.",
};
