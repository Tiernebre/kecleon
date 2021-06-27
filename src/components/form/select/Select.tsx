import { SelectHTMLAttributes } from "react";
import { Color } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
} from "../../../utilities";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  color?: Color;
};

const classNameMap: ClassNameTransformMap<SelectProps> = new Map([
  mapClassNameForColor(),
]);

export const Select = ({
  color,
  children,
  ...props
}: SelectProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color } as Partial<SelectProps>,
    ["select"]
  );

  return (
    <div className={className}>
      <select {...props}>{children}</select>
    </div>
  );
};
