import { PropsWithChildren } from "react";

export type ColumnsProps = PropsWithChildren<{
  mobile?: boolean;
  gapless?: boolean;
}>;

export const Columns = ({
  mobile,
  gapless,
  children,
}: ColumnsProps): JSX.Element => {
  const classes = ["columns"];

  if (mobile) {
    classes.push("is-mobile");
  }
  if (gapless) {
    classes.push("is-gapless");
  }

  const className = classes.join(" ");

  return <div className={className}>{children}</div>;
};
