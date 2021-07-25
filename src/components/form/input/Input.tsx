import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Color, Size } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
  mapClassNameForSize,
} from "../../../utilities";

type InputHtmlAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
export type InputProps = InputHtmlAttributes & {
  color?: Color;
  size?: Size;
  rounded?: boolean;
  isStatic?: boolean;
  register?: UseFormRegisterReturn;
  invalid?: boolean;
};

const classNameMap: ClassNameTransformMap<InputProps> = new Map([
  mapClassNameForColor<InputProps>(),
  mapClassNameForSize<InputProps>(),
  ["rounded", () => "is-rounded"],
  ["isStatic", () => "is-static"],
]);

export const Input = ({
  color,
  size,
  isStatic,
  rounded,
  register,
  invalid = false,
  ...props
}: InputProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, isStatic, rounded } as Partial<InputProps>,
    ["input"]
  );
  return (
    <input
      {...props}
      {...register}
      className={className}
      aria-invalid={invalid}
    />
  );
};
