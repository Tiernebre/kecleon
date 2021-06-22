import { Notification } from "..";
import { AlertColor } from "../../types";

export type AlertProps = {
  message: string;
  color: AlertColor;
};

export const Alert = ({ color, message }: AlertProps): JSX.Element => {
  return (
    <div className="alert">
      <Notification color={color} closable>
        {message}
      </Notification>
    </div>
  );
};
