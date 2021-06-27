import { SelectHTMLAttributes } from "react";
import { Color, Size } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
  mapClassNameForSize,
} from "../../../utilities";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  color?: Color;
  size?: Size;
};

const classNameMap: ClassNameTransformMap<SelectProps> = new Map([
  mapClassNameForColor(),
  mapClassNameForSize(),
]);

export const Select = ({
  color,
  size,
  children,
  ...props
}: SelectProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size } as Partial<SelectProps>,
    ["select"]
  );

  return (
    <div className={className}>
      <select {...props}>{children}</select>
    </div>
  );
};
