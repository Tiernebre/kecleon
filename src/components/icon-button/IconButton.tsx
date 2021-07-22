import { PropsWithChildren } from "react";
import { Direction } from "../..";
import { Button, ButtonProps } from "../button";
import { Icon, IconProps } from "../icon";

export type IconButtonProps = PropsWithChildren<{
  icon: IconProps;
  iconDirection?: Direction;
}> &
  ButtonProps;

export const IconButton = ({
  icon,
  children,
  iconDirection = "left",
  ...buttonProps
}: IconButtonProps): JSX.Element => {
  const iconProps: IconProps = {
    fontSize: "sm",
    ...icon,
  };
  const iconIsRenderedOnRight = iconDirection === "right";

  return (
    <Button {...buttonProps}>
      {!iconIsRenderedOnRight && <Icon {...iconProps} />}
      {children && <span>{children}</span>}
      {iconIsRenderedOnRight && <Icon {...iconProps} />}
    </Button>
  );
};
