import { Notification } from "..";
import { AlertColor } from "../../types";

export type AlertProps = {
  message: string;
  color: AlertColor;
};

export const Alert = ({ color, message }: AlertProps): JSX.Element => {
  return (
    <Notification color={color} closable>
      {message}
    </Notification>
  );
};
