import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type DropdownItemProps = PropsWithChildren<{
  active?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<DropdownItemProps> = new Map([
  ["active", () => "is-active"],
]);

export const DropdownItem = ({
  children,
  active,
}: DropdownItemProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { active } as Partial<DropdownItemProps>,
    ["dropdown-item"]
  );
  return <span className={className}>{children}</span>;
};