import { ReactNode, useState } from "react";
import { Navbar, NavbarProps } from "../navbar";
import { NavbarBrand } from "../navbar-brand";
import { NavbarBurger } from "../navbar-burger";
import { NavbarMenu } from "../navbar-menu";

export type SmartNavbarProps = NavbarProps & {
  brandItems?: ReactNode;
  menuStartItems?: ReactNode;
  menuEndItems?: ReactNode;
};

/**
 * SmartNavbar is a stateful Navigation bar that is built upon the
 * decoupled and atomic Navbar elements that includes wired up stateful
 * logic around menu visibility.
 *
 * It is suggested to use SmartNavbar if you want a standard responsive
 * navigation bar out-of-the-box. If you wish for more customization / flexibility,
 * I suggest using the provided `Navbar` components for a more declarative customized
 * approach.
 */
export const SmartNavbar = ({
  brandItems,
  menuStartItems,
  menuEndItems,
  ...props
}: SmartNavbarProps): JSX.Element => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const toggleMenuVisibility = () => setMenuIsVisible(!menuIsVisible);

  return (
    <Navbar {...props}>
      <NavbarBrand
        items={brandItems}
        burger={
          <NavbarBurger onClick={toggleMenuVisibility} active={menuIsVisible} />
        }
      />
      <NavbarMenu
        active={menuIsVisible}
        start={menuStartItems}
        end={menuEndItems}
      />
    </Navbar>
  );
};
