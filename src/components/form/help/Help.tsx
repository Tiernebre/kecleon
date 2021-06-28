import { PropsWithChildren } from "react";

export type HelpProps = PropsWithChildren<{
  id?: string;
}>;

export const Help = ({ id, children }: HelpProps): JSX.Element => (
  <p id={id} className="help">
    {children}
  </p>
);
