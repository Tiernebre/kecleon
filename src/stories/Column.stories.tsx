import { Story, Meta } from "@storybook/react";

import { Column, ColumnProps, columnSizes } from "../components";
import { directions } from "../types";

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
    offset: {
      control: {
        type: "select",
        options: columnSizes,
      },
    },
    align: {
      control: {
        type: "select",
        options: directions,
      },
    },
  },
} as Meta<ColumnProps>;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const SimpleColumn = Template.bind({});
SimpleColumn.args = {
  children: "Column",
};
