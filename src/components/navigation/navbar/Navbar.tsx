import { PropsWithChildren } from "react";
import { Color, Position } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
} from "../../../utilities";

export type NavbarProps = PropsWithChildren<{
  transparent?: boolean;
  fixed?: Position;
  color?: Color;
}>;

const classNameMapping: ClassNameTransformMap<NavbarProps> = new Map([
  ["transparent", () => "is-transparent"],
  ["fixed", (position: string) => `is-fixed-${position}`],
  mapClassNameForColor<NavbarProps>(),
]);

/**
 * Navbar is a component for building a navigation bar.
 *
 * Please note: if you are using the "fixed" prop, you will need to add
 * the respective class to either <html> or <body> for anchoring the fixed
 * navigation bar correctly. These classes are **has-navbar-fixed-top** or
 * **has-navbar-fixed-bottom** dependent upon your position. Eventually
 * I may automate this to be added a class to the HTML/Body... stay tuned.
 */
export const Navbar = ({
  transparent,
  fixed,
  color,
  children,
}: NavbarProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { transparent, fixed, color } as Partial<NavbarProps>,
    ["navbar"]
  );
  return <nav className={className}>{children}</nav>;
};
