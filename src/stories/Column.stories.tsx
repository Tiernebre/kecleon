import { Story, Meta } from "@storybook/react";

import { Column, ColumnProps, columnSizes } from "../components";

export default {
  component: Column,
  title: "Example/Column",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "select",
        options: columnSizes,
      },
    },
  },
} as Meta<ColumnProps>;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const SimpleColumn = Template.bind({});
SimpleColumn.args = {
  children: "Column",
};
