import { PropsWithChildren } from "react";

export const DropdownContent = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  return <div className="dropdown-content">{children}</div>;
};
