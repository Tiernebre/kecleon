import { AnchorHTMLAttributes } from "react";

export type NavbarItemProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarItemLink = ({
  children,
  ...props
}: NavbarItemProps): JSX.Element => {
  return (
    <a {...props} className="navbar-item">
      {children}
    </a>
  );
};
