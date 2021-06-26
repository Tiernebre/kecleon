import { PropsWithChildren } from "react";

export const FormField = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  return <div className="field">{children}</div>;
};
