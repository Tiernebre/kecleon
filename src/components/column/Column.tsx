import { PropsWithChildren } from "react";

export const columnSizes = [
  "one-quarter",
  "one-third",
  "two-thirds",
  "half",
  "three-quarters",
  "full",
  "four-fifths",
  "three-fifths",
  "two-fifths",
  "one-fifth",
] as const;

export type ColumnSize = typeof columnSizes[number];

export type ColumnProps = PropsWithChildren<{
  size?: ColumnSize;
}>;

export const Column = ({ size, children }: ColumnProps): JSX.Element => {
  const classes = ["column"];

  if (size) {
    classes.push(`is-${size}`);
  }

  const className = classes.join(" ");

  return <div className={className}>{children}</div>;
};
