import { Link, LinkProps } from "react-router-dom";
import { PartialBy } from "../../..";

export type NavbarItemLinkProps = PartialBy<LinkProps, "to">;

export const NavbarItemLink = ({
  children,
  to,
  href,
  ...props
}: NavbarItemLinkProps): JSX.Element | null => {
  if (to) {
    return (
      <Link className="navbar-item" to={to} {...props}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a className="navbar-item" href={href} {...props}>
        {children}
      </a>
    );
  } else {
    return null;
  }
};
