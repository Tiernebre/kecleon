import { PropsWithChildren } from "react";

export const Label = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => (
  <label className="label">{children}</label>
);
