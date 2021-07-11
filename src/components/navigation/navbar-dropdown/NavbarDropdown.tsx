import { PropsWithChildren } from "react";

export type NavbarDropdownProps = PropsWithChildren<unknown>;

export const NavbarDropdown = ({
  children,
}: NavbarDropdownProps): JSX.Element => {
  return <div className="navbar-dropdown">{children}</div>;
};
