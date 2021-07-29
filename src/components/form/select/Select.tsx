import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
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
    register?: UseFormRegisterReturn;
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
  describedBy,
  register,
  invalid = false,
  placeholder,
  ...props
}: SelectProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, multiple } as Partial<SelectProps>,
    ["select"]
  );

  const placeholderOption = (
    <option disabled selected value="">
      {placeholder}
    </option>
  );

  return (
    <div className={className}>
      <select
        {...register}
        multiple={multiple}
        {...props}
        aria-invalid={invalid}
        aria-describedby={describedBy}
      >
        {placeholder && placeholderOption}
        {children}
      </select>
    </div>
  );
};
