import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "../button";
import { Icon, IconProps } from "../icon";

export type IconButtonProps = PropsWithChildren<{
  icon: IconProps;
}> &
  ButtonProps;

export const IconButton = ({
  icon,
  children,
  ...buttonProps
}: IconButtonProps): JSX.Element => {
  return (
    <Button {...buttonProps}>
      <Icon {...icon} />
      {children && <span>{children}</span>}
    </Button>
  );
};
