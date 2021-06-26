import { ExpireProps, AlertProps } from "..";
import { Alert } from "../alert";
import { Expire } from "../expire";

export type ExpirableAlertProps = ExpireProps & AlertProps;

export const ExpirableAlert = ({
  expiresInMillis,
  onRemoval,
  fadeable,
  fadeDurationInMillis,
  ...props
}: ExpirableAlertProps): JSX.Element => {
  const expireProps: ExpireProps = {
    expiresInMillis,
    onRemoval,
    fadeable,
    fadeDurationInMillis,
  };
  return (
    <Expire {...expireProps}>
      <Alert {...props} />
    </Expire>
  );
};
