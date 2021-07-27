import { PropsWithChildren } from "react";
import { Notification } from "..";
import { AlertColor } from "../../types";
import styles from "./Alert.module.scss";

export type AlertProps = PropsWithChildren<{
  color: AlertColor;
  onClose?: () => void;
}>;

export const Alert = ({
  color,
  onClose,
  children,
}: AlertProps): JSX.Element => {
  return (
    <div role="alert" className={styles.alert}>
      <Notification color={color} closable onClose={onClose}>
        {children}
      </Notification>
    </div>
  );
};
