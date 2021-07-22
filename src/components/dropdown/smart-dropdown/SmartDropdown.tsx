import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  DropdownContent,
} from "..";

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
export const SmartDropdown = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

  return (
    <Dropdown>
      <DropdownTrigger htmlFor="dropdown-menu" onClick={toggleActive}>
        Dropdown button
      </DropdownTrigger>
      <DropdownMenu id="dropdown-menu">
        <DropdownContent>
          <DropdownItem>Dropdown Item</DropdownItem>
          <DropdownItem>Other dropdown item</DropdownItem>
          <DropdownItem active>Active dropdown item</DropdownItem>
          <DropdownItem>With a divider</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};
