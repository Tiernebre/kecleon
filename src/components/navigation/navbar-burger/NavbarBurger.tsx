import { ButtonHTMLAttributes } from "react";

export type NavbarBurgerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const NavbarBurger = (props: NavbarBurgerProps): JSX.Element => (
  <button {...props} className="navbar-burger">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
);
