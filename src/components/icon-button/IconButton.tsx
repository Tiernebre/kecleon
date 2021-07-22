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
  const iconProps: IconProps = {
    fontSize: "sm",
    ...icon,
  };
  const iconDirection = icon.direction ?? "left";
  const iconIsRenderedOnRight = iconDirection === "right";

  return (
    <Button {...buttonProps}>
      {!iconIsRenderedOnRight && <Icon {...iconProps} />}
      {children && <span>{children}</span>}
      {iconIsRenderedOnRight && <Icon {...iconProps} />}
    </Button>
  );
};
