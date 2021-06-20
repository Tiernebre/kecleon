import { PropsWithChildren } from "react";

export type ColumnsProps = PropsWithChildren<{
  mobile?: boolean;
  gapless?: boolean;
  verticallyCentered?: boolean;
}>;

export const Columns = ({
  mobile,
  gapless,
  children,
  verticallyCentered,
}: ColumnsProps): JSX.Element => {
  const classes = ["columns"];

  if (mobile) {
    classes.push("is-mobile");
  }
  if (gapless) {
    classes.push("is-gapless");
  }
  if (verticallyCentered) {
    classes.push("is-vcentered");
  }

  const className = classes.join(" ");

  return <div className={className}>{children}</div>;
};
