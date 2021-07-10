import { Anchor, AnchorProps } from "../../anchor";

export type NavbarItemLinkProps = AnchorProps;

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
export const NavbarItemLink = (
  props: NavbarItemLinkProps
): JSX.Element | null => {
  return <Anchor {...props} className="navbar-item" />;
};
