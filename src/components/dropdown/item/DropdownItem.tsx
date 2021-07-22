import { PropsWithChildren } from "react";

export type DropdownItemProps = PropsWithChildren<unknown>;

export const DropdownItem = ({ children }: DropdownItemProps): JSX.Element => {
  return <span className="dropdown-item">{children}</span>;
};
