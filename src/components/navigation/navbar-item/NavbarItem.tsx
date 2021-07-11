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

export const NavbarItem = ({
  link,
  container,
  children,
}: NavbarItemProps): JSX.Element => {
  if (link) {
    return <NavbarItemLink {...link}>{children}</NavbarItemLink>;
  } else {
    return <NavbarItemContainer {...container}>{children}</NavbarItemContainer>;
  }
};
