import { ButtonHTMLAttributes } from "react";
import { Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type DeleteProps = {
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const deleteClassNameMap: ClassNameTransformMap<DeleteProps> = new Map([
  ["size", (size: string) => `is-${size}`],
]);

export const Delete = ({ size, ...buttonProps }: DeleteProps): JSX.Element => {
  const className = createClassNameFromProps(
    deleteClassNameMap,
    { size } as Partial<DeleteProps>,
    ["delete"]
  );
  return <button className={className} {...buttonProps} />;
};
