import { PropsWithChildren } from "react";
import { Notification } from "..";
import { AlertColor } from "../../types";
import styles from "./Alert.module.css";

export type AlertProps = PropsWithChildren<{
  color: AlertColor;
  onClose?: () => void;
}>;

export const Alert = ({
  color,
  children,
  onClose,
}: AlertProps): JSX.Element => {
  return (
    <div role="alert" className={styles.alert}>
      <Notification color={color} closable={false}>
        {children}
      </Notification>
    </div>
  );
};
