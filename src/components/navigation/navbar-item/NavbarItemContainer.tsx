import { PropsWithChildren } from "react";

export type NavbarItemContainerProps = PropsWithChildren<unknown>;

export const NavbarItemContainer = ({
  children,
}: NavbarItemContainerProps): JSX.Element => {
  return <div className="navbar-item">{children}</div>;
};
