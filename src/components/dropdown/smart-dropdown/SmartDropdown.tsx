import { ReactNode, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownContent } from "..";
import { DropdownProps } from "../container";

export type SmartDropdownProps = Omit<DropdownProps, "active"> & {
  menuId: string;
  items: ReactNode;
};

/**
 * SmartDropdown is a fully integrated composition of all of the
 * "dumb" Dropdown components orchestrated togtether using
 * state and side effects. This makes it easier for consumers
 * to plug and go with a Dropdown they do not have to assemble
 * themselves.
 *
 * If you want to assemble your own Dropdown or do not want
 * opinionated state, I suggest using the individual Dropdown
 * components themselves rather than SmartDropdown.
 */
export const SmartDropdown = ({
  menuId,
  items,
  ...dropdownProps
}: SmartDropdownProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

  return (
    <Dropdown {...dropdownProps} active={active}>
      <DropdownTrigger htmlFor={menuId} onClick={toggleActive}>
        Dropdown button
      </DropdownTrigger>
      <DropdownMenu id={menuId}>
        <DropdownContent>{items}</DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};
