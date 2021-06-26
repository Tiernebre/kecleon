import { PropsWithChildren } from "react";

export type FormControlProps = PropsWithChildren<unknown>;

export const FormControl = ({ children }: FormControlProps): JSX.Element => {
  return <div className="control">{children}</div>;
};
