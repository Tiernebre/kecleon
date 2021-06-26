import { InputHTMLAttributes } from "react";
import { Color, Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type InputProps = {
  color?: Color;
  size?: Size;
  rounded?: boolean;
  isStatic?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const classNameMap: ClassNameTransformMap<InputProps> = new Map([
  ["color", (color: string) => `is-${color}`],
  ["size", (size: string) => `is-${size}`],
  ["rounded", () => "is-rounded"],
  ["isStatic", (staticc: string) => `is-${staticc}`],
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
