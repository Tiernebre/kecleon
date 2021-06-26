import { ExpireProps, AlertProps } from "..";
import { Alert } from "../alert";
import { Expire } from "../expire";

export type ExpirableAlertProps = ExpireProps & AlertProps;

export const ExpirableAlert = ({
  expiresInMillis,
  ...props
}: ExpirableAlertProps): JSX.Element => {
  return (
    <Expire expiresInMillis={expiresInMillis}>
      <Alert {...props} />
    </Expire>
  );
};
