import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Input, InputProps } from "../components";
import { colors, sizes } from "../types";

export default {
  component: Input,
  title: "Example/Input",
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

const InputColorsTemplate: Story<InputProps> = () => (
  <Fragment>
    {colors.map((color) => {
      return (
        <div className="block">
          <Input color={color} value={color}></Input>
        </div>
      );
    })}
  </Fragment>
);
export const InputColors = InputColorsTemplate.bind({});
