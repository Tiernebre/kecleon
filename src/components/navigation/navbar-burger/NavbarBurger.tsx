import { ButtonHTMLAttributes } from "react";

export type NavbarBurgerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export const NavbarBurger = (props: NavbarBurgerProps): JSX.Element => (
  <button
    aria-label="Navigation Menu Toggle"
    {...props}
    className="navbar-burger"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
);
