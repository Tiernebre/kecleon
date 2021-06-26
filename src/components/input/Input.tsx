import { InputHTMLAttributes } from "react";
import { Color, Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

type InputHtmlAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
export type InputProps = InputHtmlAttributes & {
  color?: Color;
  size?: Size;
  rounded?: boolean;
  isStatic?: boolean;
};

const classNameMap: ClassNameTransformMap<InputProps> = new Map([
  ["color", (color: string) => `is-${color}`],
  ["size", (size: string) => `is-${size}`],
  ["rounded", () => "is-rounded"],
  ["isStatic", () => "is-static"],
]);

export const Input = ({
  color,
  size,
  isStatic,
  rounded,
  ...props
}: InputProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, isStatic, rounded } as Partial<InputProps>,
    ["input"]
  );
  return <input className={className} {...props} />;
};
