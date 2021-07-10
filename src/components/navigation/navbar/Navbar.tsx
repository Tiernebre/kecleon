import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarProps = PropsWithChildren<{
  transparent?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<NavbarProps> = new Map([
  ["transparent", () => "is-transparent"],
]);

export const Navbar = ({ transparent, children }: NavbarProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { transparent } as Partial<NavbarProps>,
    ["navbar"]
  );
  return <nav className={className}>{children}</nav>;
};
