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

  const navbarStart = start && <div className="navbar-start">{start}</div>;
  const navbarEnd = end && <div className="navbar-end">{end}</div>;

  return (
    <div className={className}>
      {navbarStart}
      {children}
      {navbarEnd}
    </div>
  );
};
