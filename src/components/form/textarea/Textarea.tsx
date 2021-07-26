import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { CommonFormInputAttributes, Size } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
  mapClassNameForSize,
} from "../../../utilities";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  CommonFormInputAttributes & {
    size?: Size;
    fixed?: boolean;
    register?: UseFormRegisterReturn;
  };

const classNameMap: ClassNameTransformMap<TextareaProps> = new Map([
  mapClassNameForColor<TextareaProps>(),
  mapClassNameForSize<TextareaProps>(),
  ["fixed", () => "has-fixed-size"],
]);

export const Textarea = ({
  color,
  size,
  fixed,
  describedBy,
  register,
  invalid = false,
  ...props
}: TextareaProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, fixed } as Partial<TextareaProps>,
    ["textarea"]
  );
  return (
    <textarea
      {...register}
      className={className}
      {...props}
      aria-invalid={invalid}
      aria-describedby={describedBy}
    />
  );
};
