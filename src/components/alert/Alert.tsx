import { PropsWithChildren } from "react";
import { Notification } from "..";
import { AlertColor } from "../../types";
import styles from "./Alert.module.css";

export type AlertProps = PropsWithChildren<{
  color: AlertColor;
  onClose: () => void;
}>;

export const Alert = ({
  color,
  children,
  onClose,
}: AlertProps): JSX.Element => {
  return (
    <div className={styles.alert}>
      <Notification color={color} closable onClose={onClose}>
        {children}
      </Notification>
    </div>
  );
};
