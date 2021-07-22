import { PropsWithChildren } from "react";

export type DropdownMenuProps = PropsWithChildren<{
  id: string;
}>;

export const DropdownMenu = ({
  id,
  children,
}: DropdownMenuProps): JSX.Element => {
  return (
    <div className="dropdown-menu" id={id} role="menu">
      {children}
    </div>
  );
};
