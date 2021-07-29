import { PropsWithChildren } from "react";
import { Button, IconButtonProps } from "../..";

export type DropdownItemProps = IconButtonProps &
  PropsWithChildren<{
    active?: boolean;
  }>;

export const DropdownItem = ({
  active,
  ...buttonProps
}: DropdownItemProps): JSX.Element => {
  const color = active ? "link" : "white";

  return <Button color={color} className="dropdown-item" {...buttonProps} />;
};
