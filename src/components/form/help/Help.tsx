import { PropsWithChildren } from "react";

export const Help = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
  <p className="help">{children}</p>
);
