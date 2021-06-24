import { Notification } from "..";
import { AlertColor } from "../../types";
import styles from "./Alert.module.css";

export type AlertProps = {
  message: string;
  color: AlertColor;
};

export const Alert = ({ color, message }: AlertProps): JSX.Element => {
  return (
    <div className={styles.alert}>
      <Notification color={color} closable>
        {message}
      </Notification>
    </div>
  );
};
