import { ButtonHTMLAttributes } from "react";
import { Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type DeleteProps = {
  label: string;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const deleteClassNameMap: ClassNameTransformMap<DeleteProps> = new Map([
  ["size", (size: string) => `is-${size}`],
]);

export const Delete = ({
  size,
  label,
  ...buttonProps
}: DeleteProps): JSX.Element => {
  const className = createClassNameFromProps(
    deleteClassNameMap,
    { size } as Partial<DeleteProps>,
    ["delete"]
  );
  return <button className={className} aria-label={label} {...buttonProps} />;
};
