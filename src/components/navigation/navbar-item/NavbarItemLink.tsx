import { Link, LinkProps } from "react-router-dom";

export type NavbarItemLinkProps = LinkProps;

export const NavbarItemLink = ({
  children,
  ...props
}: NavbarItemLinkProps): JSX.Element => {
  return (
    <Link {...props} className="navbar-item">
      {children}
    </Link>
  );
};
