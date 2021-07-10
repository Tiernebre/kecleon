import { PropsWithChildren } from "react";
import { Position } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarProps = PropsWithChildren<{
  transparent?: boolean;
  fixed?: Position;
}>;

const classNameMapping: ClassNameTransformMap<NavbarProps> = new Map([
  ["transparent", () => "is-transparent"],
  ["fixed", (position: string) => `is-fixed-${position}`],
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
export const Navbar = ({ transparent, children }: NavbarProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { transparent } as Partial<NavbarProps>,
    ["navbar"]
  );
  return <nav className={className}>{children}</nav>;
};
