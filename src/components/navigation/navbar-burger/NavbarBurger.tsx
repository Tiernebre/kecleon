import { ButtonHTMLAttributes } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type NavbarBurgerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

const classNameMap: ClassNameTransformMap<NavbarBurgerProps> = new Map([
  ["active", () => "is-active"],
]);

export const NavbarBurger = ({
  active,
  ...props
}: NavbarBurgerProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { active } as Partial<NavbarBurgerProps>,
    ["navbar-burger"]
  );
  return (
    <button
      aria-label="Navigation Menu Toggle"
      {...props}
      className={className}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};
