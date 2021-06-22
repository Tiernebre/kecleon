import { PropsWithChildren } from "react";
import { Color } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";
import { Delete } from "../delete";

export type NotificationProps = PropsWithChildren<{
  color?: Color;
  light?: boolean;
  closable?: boolean;
}>;

const notificationClassNameMap: ClassNameTransformMap<NotificationProps> =
  new Map([
    ["color", (color: string) => `is-${color}`],
    ["light", () => "is-light"],
  ]);

export const Notification = ({
  color,
  light,
  closable = true,
  children,
}: NotificationProps): JSX.Element => {
  const className = createClassNameFromProps(
    notificationClassNameMap,
    { color, light } as Partial<NotificationProps>,
    ["notification"]
  );
  return (
    <div className={className}>
      {closable && <Delete label="Close Notification" />}
      {children}
    </div>
  );
};
