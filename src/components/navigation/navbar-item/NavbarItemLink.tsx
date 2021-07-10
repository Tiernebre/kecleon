import { Link, LinkProps } from "react-router-dom";

export type NavbarItemProps = LinkProps;

export const NavbarItemLink = ({
  children,
  ...props
}: NavbarItemProps): JSX.Element => {
  return (
    <Link {...props} className="navbar-item">
      {children}
    </Link>
  );
};
