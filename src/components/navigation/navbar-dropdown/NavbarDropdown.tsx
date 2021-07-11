import { PropsWithChildren } from "react";
import { Direction } from "../../..";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarDropdownProps = PropsWithChildren<{
  direction?: Direction;
}>;

const classNameMap: ClassNameTransformMap<NavbarDropdownProps> = new Map([
  ["direction", (direction: string) => `is-${direction}`],
]);

export const NavbarDropdown = ({
  children,
  direction,
}: NavbarDropdownProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { direction } as Partial<NavbarDropdownProps>,
    ["navbar-dropdown"]
  );
  return <div className={className}>{children}</div>;
};
