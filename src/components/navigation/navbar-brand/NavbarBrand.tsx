import { PropsWithChildren } from "react";

export const NavbarBrand = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <div className="navbar-brand">{children}</div>
);
