import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";
import {
  NavbarItemContainer,
  NavbarItemContainerProps,
} from "./NavbarItemContainer";
import { NavbarItemLink, NavbarItemLinkProps } from "./NavbarItemLink";

export type NavbarItemProps = PropsWithChildren<{
  link?: NavbarItemLinkProps;
  container?: NavbarItemContainerProps;
  expanded?: boolean;
  tab?: boolean;
  active?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<NavbarItemProps> = new Map([
  ["expanded", () => "is-expanded"],
  ["tab", () => "is-tab"],
  ["active", () => "is-active"],
]);

export const NavbarItem = ({
  link,
  container,
  children,
  expanded,
  tab,
  active,
}: NavbarItemProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { expanded, tab, active } as Partial<NavbarItemProps>,
    ["navbar-item"]
  );

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
