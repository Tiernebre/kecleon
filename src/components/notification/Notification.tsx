import { PropsWithChildren } from "react";
import { Color } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type NotificationProps = PropsWithChildren<{
  color?: Color;
  light?: boolean;
}>;

const notificationClassNameMap: ClassNameTransformMap<NotificationProps> =
  new Map([
    ["color", (color: string) => `is-${color}`],
    ["light", () => "is-light"],
  ]);

export const Notification = ({
  color,
  light,
  children,
}: NotificationProps): JSX.Element => {
  const className = createClassNameFromProps(
    notificationClassNameMap,
    { color, light } as Partial<NotificationProps>,
    ["notification"]
  );
  return <div className={className}>{children}</div>;
};
