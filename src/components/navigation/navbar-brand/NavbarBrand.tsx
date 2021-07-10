import { ReactNode } from "react";

export type NavbarBrandProps = {
  items?: ReactNode;
  burger?: ReactNode;
};

export const NavbarBrand = ({
  items,
  burger,
}: NavbarBrandProps): JSX.Element => (
  <div className="navbar-brand">
    {items}
    {burger}
  </div>
);
