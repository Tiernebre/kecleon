import { PropsWithChildren } from "react";
import {
  NavbarItemContainer,
  NavbarItemContainerProps,
} from "./NavbarItemContainer";
import { NavbarItemLink, NavbarItemLinkProps } from "./NavbarItemLink";

export type NavbarItemProps = PropsWithChildren<{
  link?: NavbarItemLinkProps;
  container?: NavbarItemContainerProps;
}>;

const className = "navbar-item";

export const NavbarItem = ({
  link,
  container,
  children,
}: NavbarItemProps): JSX.Element => {
  if (link) {
    return (
      <NavbarItemLink {...link} className={className}>
        {children}
      </NavbarItemLink>
    );
  } else {
    return (
      <NavbarItemContainer {...container} className={className}>
        {children}
      </NavbarItemContainer>
    );
  }
};
