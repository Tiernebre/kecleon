import { Story, Meta } from "@storybook/react";
import { sizes } from "..";

import { Delete, DeleteProps } from "../components";

export default {
  component: Delete,
  title: "Example/Delete",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
  },
} as Meta<DeleteProps>;

const Template: Story<DeleteProps> = (args) => <Delete {...args} />;

export const DefaultDelete = Template.bind({});
DefaultDelete.args = {};
