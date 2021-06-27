import { TextareaHTMLAttributes } from "react";
import { Color, Size } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  color?: Color;
  size?: Size;
  fixed?: boolean;
};

const classNameMap: ClassNameTransformMap<TextareaProps> = new Map([
  ["color", (color: string) => `is-${color}`],
  ["size", (size: string) => `is-${size}`],
  ["fixed", () => "has-fixed-size"],
]);

export const Textarea = ({
  color,
  size,
  fixed,
  ...props
}: TextareaProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, fixed } as Partial<TextareaProps>,
    ["textarea"]
  );
  return <textarea className={className} {...props} />;
};
