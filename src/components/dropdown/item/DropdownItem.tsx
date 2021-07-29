import { PropsWithChildren } from "react";
import { Button, IconButton, IconButtonProps } from "../..";
import { IconProps } from "../../icon";

export type DropdownItemProps = Omit<IconButtonProps, "icon"> &
  PropsWithChildren<{
    active?: boolean;
    icon?: IconProps;
  }>;

const className = "dropdown-item";

export const DropdownItem = ({
  active,
  ...buttonProps
}: DropdownItemProps): JSX.Element => {
  const color = active ? "link" : "white";

  const props: DropdownItemProps = {
    ...buttonProps,
    className,
    color,
  };

  if (props.icon) {
    return <IconButton icon={props.icon} {...props} />;
  } else {
    return <Button {...props} />;
  }
};
