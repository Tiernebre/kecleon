import { AbstractView, PropsWithChildren, ReactNode } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarMenuProps = PropsWithChildren<{
  start?: ReactNode;
  end?: ReactNode;
  active?: AbstractView;
}>;

const classNameMap: ClassNameTransformMap<NavbarMenuProps> = new Map([
  ["active", () => "is-active"],
]);

export const NavbarMenu = ({
  start,
  end,
  active,
  children,
}: NavbarMenuProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { active } as Partial<NavbarMenuProps>,
    ["navbar-menu"]
  );
  return (
    <div className={className}>
      {start}
      {children}
      {end}
    </div>
  );
};
