import { Link, LinkProps } from "react-router-dom";
import { PartialBy } from "../../..";

export type NavbarItemLinkProps = PartialBy<LinkProps, "to">;

/**
 * A navigation item link that supports the ability to be a
 * single-page application link or a traditional server-side
 * anchor element.
 *
 * If you wish to use a single page router link, you will need to provide the
 * `to` attribute.
 *
 * If you wish to use the traditional server-side anchor tag, you will need
 * to provide the `href` attribute.
 */
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
