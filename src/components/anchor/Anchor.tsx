import { Link, LinkProps } from "react-router-dom";
import { PartialBy } from "../..";

export type AnchorProps = PartialBy<LinkProps, "to">;

/**
 * Anchor is a component that wraps around React Router's Link component (for
 * single page app routing), and also a traditional `a` HTML element (for
 * server side routing, like routing to a different origin).
 *
 * If you wish to use a single page router link, you will need to provide the
 * `to` attribute.
 *
 * If you wish to use the traditional server-side anchor tag, you will need
 * to provide the `href` attribute.
 */
export const Anchor = ({
  children,
  to,
  href,
  ...props
}: AnchorProps): JSX.Element | null => {
  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  } else {
    return null;
  }
};
