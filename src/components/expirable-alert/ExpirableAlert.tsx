import { ExpireProps, AlertProps } from "..";
import { Alert } from "../alert";
import { Expire } from "../expire";

export type ExpirableAlertProps = ExpireProps & AlertProps;

export const ExpirableAlert = ({
  expiresInMillis,
  onRemoval,
  ...props
}: ExpirableAlertProps): JSX.Element => {
  return (
    <Expire expiresInMillis={expiresInMillis} onRemoval={onRemoval}>
      <Alert {...props} />
    </Expire>
  );
};
