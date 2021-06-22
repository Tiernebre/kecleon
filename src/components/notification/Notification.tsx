import { Color } from "../../types";

export type NotificationProps = {
  color?: Color;
};

export const Notification = (props: NotificationProps): JSX.Element => (
  <div className="notification">Notification</div>
);
