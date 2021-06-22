import { PropsWithChildren } from "react";
import { Color } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type NotificationProps = PropsWithChildren<{
  color?: Color;
}>;

const notificationClassNameMap: ClassNameTransformMap<NotificationProps> =
  new Map([["color", (color: string) => `is-${color}`]]);

export const Notification = ({
  color,
  children,
}: NotificationProps): JSX.Element => {
  const className = createClassNameFromProps(
    notificationClassNameMap,
    { color } as Partial<NotificationProps>,
    ["notification"]
  );
  return <div className={className}>{children}</div>;
};
