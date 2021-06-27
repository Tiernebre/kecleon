import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";

import { Textarea, TextareaProps } from "../../components";
import { colors, sizes } from "../../types";

export default {
  title: "Form/Textarea",
  component: Textarea,
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
    fixed: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<TextareaProps>;

const InteractiveTextareaTemplate: Story<TextareaProps> = (args) => (
  <Textarea {...args} />
);

export const InteractiveTextarea = InteractiveTextareaTemplate.bind({});
InteractiveTextarea.args = {};

export const FixedTextarea = InteractiveTextareaTemplate.bind({});
InteractiveTextarea.args = {
  fixed: true,
};

const TextareaColorsTemplate: Story<TextareaProps> = () => (
  <Fragment>
    {colors.map((color) => {
      return (
        <div className="block" key={color}>
          <Textarea color={color} value={color}></Textarea>
        </div>
      );
    })}
  </Fragment>
);
export const TextareaColors = TextareaColorsTemplate.bind({});

const TextareaSizesTemplate: Story<TextareaProps> = () => (
  <Fragment>
    {sizes.map((size) => {
      return (
        <div className="block" key={size}>
          <Textarea size={size} value={size}></Textarea>
        </div>
      );
    })}
  </Fragment>
);
export const TextareaSizes = TextareaSizesTemplate.bind({});
