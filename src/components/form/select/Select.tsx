import { SelectHTMLAttributes, useEffect, useRef, useState } from "react";
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
    hidePlaceholderAfterChange?: boolean;
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
  hidePlaceholderAfterChange,
  ...props
}: SelectProps): JSX.Element => {
  const [interactedWith, setInteractedWith] = useState(false);
  const className = createClassNameFromProps(
    classNameMap,
    { color, size, multiple } as Partial<SelectProps>,
    ["select"]
  );

  const onInput = () => {
    if (hidePlaceholderAfterChange) {
      setInteractedWith(true);
    }
  };

  const placeholderOption = placeholder && (
    <option disabled selected value="" hidden={interactedWith}>
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
        onInput={onInput}
      >
        {placeholderOption}
        {children}
      </select>
    </div>
  );
};
