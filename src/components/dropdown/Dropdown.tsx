import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type DropdownProps = PropsWithChildren<{
  hoverable?: boolean;
  active?: boolean;
  className?: string;
}>;

const classNameMapping: ClassNameTransformMap<DropdownProps> = new Map([
  ["hoverable", () => "is-hoverable"],
  ["active", () => "is-active"],
]);

export const Dropdown = ({
  hoverable,
  active,
  className = "",
  children,
}: DropdownProps): JSX.Element => {
  const mappedClassName = createClassNameFromProps(
    classNameMapping,
    { hoverable, active } as Partial<DropdownProps>,
    ["dropdown", className]
  );
  return <div className={mappedClassName}>{children}</div>;
};
