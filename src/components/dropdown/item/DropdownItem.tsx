import { PropsWithChildren } from "react";
import { Button, IconButton, IconButtonProps } from "../..";
import { IconProps } from "../../icon";

export type DropdownItemProps = Omit<IconButtonProps, "icon"> &
  PropsWithChildren<{
    active?: boolean;
    icon?: IconProps;
    divider?: boolean;
  }>;

const className = "dropdown-item";

const DropdownDivider = () => <hr className="dropdown-divider" />;

export const DropdownItem = ({
  active,
  divider,
  ...buttonProps
}: DropdownItemProps): JSX.Element => {
  const color = active ? "link" : "white";

  const props: DropdownItemProps = {
    ...buttonProps,
    className,
    color,
  };

  const dropdownItemButton = props.icon ? (
    <IconButton icon={props.icon} {...props} />
  ) : (
    <Button {...props} />
  );

  return (
    <>
      {divider && <DropdownDivider />}
      {dropdownItemButton}
    </>
  );
};
