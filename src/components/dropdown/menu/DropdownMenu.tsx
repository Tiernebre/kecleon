import { PropsWithChildren } from "react";

export type DropdownMenuProps = PropsWithChildren<{
  id: string;
  active: boolean;
}>;

export const DropdownMenu = ({
  id,
  children,
  active,
}: DropdownMenuProps): JSX.Element => {
  return (
    <div className="dropdown-menu" id={id} role="menu" aria-hidden={!active}>
      {children}
    </div>
  );
};
