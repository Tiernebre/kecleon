import { PropsWithChildren } from "react";
import { Notification } from "..";
import { AlertColor } from "../../types";
import styles from "./Alert.module.css";

export type AlertProps = PropsWithChildren<{
  color: AlertColor;
}>;

export const Alert = ({ color, children }: AlertProps): JSX.Element => {
  return (
    <div role="alert" className={styles.alert}>
      <Notification color={color}>{children}</Notification>
    </div>
  );
};
