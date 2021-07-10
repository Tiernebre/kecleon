import { Anchor, AnchorProps } from "../../anchor";

export type NavbarItemLinkProps = AnchorProps;

export const NavbarItemLink = (
  props: NavbarItemLinkProps
): JSX.Element | null => {
  return <Anchor {...props} className="navbar-item" />;
};
