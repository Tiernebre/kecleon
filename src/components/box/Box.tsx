import { PropsWithChildren } from "react";

export type BoxProps = PropsWithChildren<unknown>;

export const Box = ({ children }: BoxProps): JSX.Element => (
  <div className="box">{children}</div>
);
