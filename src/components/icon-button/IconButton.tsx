import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "../button";
import { Icon, IconProps } from "../icon";

export type IconButtonProps = PropsWithChildren<{
  icon: IconProps;
  button: ButtonProps;
}>;

export const IconButton = ({
  icon,
  button,
  children,
}: IconButtonProps): JSX.Element => {
  return (
    <Button {...button}>
      <Icon {...icon} />
      {children && <span>{children}</span>}
    </Button>
  );
};
