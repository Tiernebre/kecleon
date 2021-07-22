import { PropsWithChildren } from "react";
import { Button } from "../..";

export type DropdownItemProps = PropsWithChildren<{
  active?: boolean;
}>;

export const DropdownItem = ({
  children,
  active,
}: DropdownItemProps): JSX.Element => {
  const color = active ? "link" : "white";

  return (
    <Button color={color} className="dropdown-item">
      {children}
    </Button>
  );
};
