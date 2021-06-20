import { PropsWithChildren } from "react";

export type ColumnsProps = PropsWithChildren<{
  mobile?: boolean;
}>;

export const Columns = ({ mobile, children }: ColumnsProps): JSX.Element => {
  const classes = ["columns"];

  if (mobile) {
    classes.push("is-mobile");
  }

  const className = classes.join(" ");

  return <div className={className}>{children}</div>;
};
