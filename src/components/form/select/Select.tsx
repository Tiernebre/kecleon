import { SelectHTMLAttributes } from "react";
import { CommonFormInputAttributes, Size } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
  mapClassNameForSize,
} from "../../../utilities";

type HTMLSelectAttributes = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
>;
export type SelectProps = HTMLSelectAttributes &
  CommonFormInputAttributes & {
    size?: Size;
  };

const classNameMap: ClassNameTransformMap<SelectProps> = new Map([
  mapClassNameForColor(),
  mapClassNameForSize(),
  ["multiple", () => "is-multiple"],
]);

export const Select = ({
  color,
  size,
  multiple,
  children,
  invalid = false,
  ...props
}: SelectProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, multiple } as Partial<SelectProps>,
    ["select"]
  );

  return (
    <div className={className}>
      <select multiple={multiple} {...props} aria-invalid={invalid}>
        {children}
      </select>
    </div>
  );
};
