import { PropsWithChildren } from "react";

export const LevelItem = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  return <div className="level-item">{children}</div>;
};
