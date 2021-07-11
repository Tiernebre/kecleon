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
