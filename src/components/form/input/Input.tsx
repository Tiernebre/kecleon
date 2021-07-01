import { forwardRef, InputHTMLAttributes, Ref } from "react";
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
};

const classNameMap: ClassNameTransformMap<InputProps> = new Map([
  mapClassNameForColor<InputProps>(),
  mapClassNameForSize<InputProps>(),
  ["rounded", () => "is-rounded"],
  ["isStatic", () => "is-static"],
]);

export const Input = forwardRef(
  (
    { color, size, isStatic, rounded, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ): JSX.Element => {
    const className = createClassNameFromProps(
      classNameMap,
      { color, size, isStatic, rounded } as Partial<InputProps>,
      ["input"]
    );
    return <input className={className} {...props} ref={ref} />;
  }
);