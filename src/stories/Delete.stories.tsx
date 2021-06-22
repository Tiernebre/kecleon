import { Story, Meta } from "@storybook/react";

import { Delete, DeleteProps } from "../components";

export default {
  title: "Example/Delete",
  component: Delete,
} as Meta<DeleteProps>;

const Template: Story<DeleteProps> = (args) => <Delete {...args} />;

export const DefaultDelete = Template.bind({});
DefaultDelete.args = {};
