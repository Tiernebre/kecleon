import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Select, SelectProps } from "../../components";
import { colors, sizes } from "../../types";

export default {
  component: Select,
  title: "Form/Select",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: sizes,
      },
    },
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
    multiple: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<SelectProps>;

const InteractiveSelectTemplate: Story<SelectProps> = (args) => (
  <Select {...args}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </Select>
);

export const InteractiveSelect = InteractiveSelectTemplate.bind({});
InteractiveSelect.args = {};

const SelectColorsTemplate: Story<SelectProps> = () => (
  <Fragment>
    {colors.map((color) => {
      return (
        <div className="block" key={color}>
          <Select color={color} value={color}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </div>
      );
    })}
  </Fragment>
);
export const SelectColors = SelectColorsTemplate.bind({});

const SelectSizesTemplate: Story<SelectProps> = () => (
  <Fragment>
    {sizes.map((size) => {
      return (
        <div className="block" key={size}>
          <Select size={size} value={size}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </div>
      );
    })}
  </Fragment>
);
export const SelectSizes = SelectSizesTemplate.bind({});

const MultipleSelectTemplate: Story<SelectProps> = () => (
  <Select multiple>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </Select>
);
export const MultipleSelect = MultipleSelectTemplate.bind({});
