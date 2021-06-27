import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Input, InputProps } from "../../components";
import { colors, sizes } from "../../types";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    rounded: {
      control: {
        type: "boolean",
      },
    },
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
  },
} as Meta<InputProps>;

const InteractiveInputTemplate: Story<InputProps> = (args) => (
  <Input {...args} />
);

export const InteractiveInput = InteractiveInputTemplate.bind({});
InteractiveInput.args = {};

export const RoundedInput = InteractiveInputTemplate.bind({});
RoundedInput.args = {
  rounded: true,
};

const InputColorsTemplate: Story<InputProps> = () => (
  <Fragment>
    {colors.map((color) => {
      return (
        <div className="block" key={color}>
          <Input color={color} value={color}></Input>
        </div>
      );
    })}
  </Fragment>
);
export const InputColors = InputColorsTemplate.bind({});

const InputSizesTemplate: Story<InputProps> = () => (
  <Fragment>
    {sizes.map((size) => {
      return (
        <div className="block" key={size}>
          <Input size={size} value={size}></Input>
        </div>
      );
    })}
  </Fragment>
);
export const InputSizes = InputSizesTemplate.bind({});
