import React, { PropsWithChildren, ReactNode } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarItemContainerProps = PropsWithChildren<{
  dropdown?: ReactNode;
}>;

const classNameMapping: ClassNameTransformMap<NavbarItemContainerProps> =
  new Map([["dropdown", () => "has-dropdown"]]);

export const NavbarItemContainer = ({
  children,
  dropdown,
}: NavbarItemContainerProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { dropdown } as Partial<NavbarItemContainerProps>,
    ["navbar-item"]
  );
  return (
    <div className={className}>
      {children}

      {dropdown}
    </div>
  );
};
