import { PropsWithChildren } from "react";
import { Button } from "../..";

export type DropdownItemProps = PropsWithChildren<{
  active?: boolean;
  onClick?: () => void;
}>;

export const DropdownItem = ({
  children,
  active,
  onClick,
}: DropdownItemProps): JSX.Element => {
  const color = active ? "link" : "white";

  return (
    <Button color={color} className="dropdown-item" onClick={onClick}>
      {children}
    </Button>
  );
};
