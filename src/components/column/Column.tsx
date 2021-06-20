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
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
] as const;

export type ColumnSize = typeof columnSizes[number];

export type ColumnProps = PropsWithChildren<{
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
  mobile?: ColumnSize;
  tablet?: ColumnSize;
  desktop?: ColumnSize;
  widescreen?: ColumnSize;
  fullHd?: ColumnSize;
}>;

export const Column = ({
  size,
  offset,
  narrow,
  mobile,
  tablet,
  desktop,
  widescreen,
  fullHd,
  children,
}: ColumnProps): JSX.Element => {
  const classes = ["column"];

  if (size) {
    classes.push(`is-${size}`);
  }
  if (offset) {
    classes.push(`is-offset-${offset}`);
  }
  if (narrow) {
    classes.push("is-narrow");
  }
  if (mobile) {
    classes.push(`is-${mobile}-mobile`);
  }
  if (tablet) {
    classes.push(`is-${tablet}-tablet`);
  }
  if (desktop) {
    classes.push(`is-${desktop}-desktop`);
  }
  if (widescreen) {
    classes.push(`is-${widescreen}-widescreen`);
  }
  if (fullHd) {
    classes.push(`is-${fullHd}-fullhd`);
  }

  const className = classes.join(" ");

  return <div className={className}>{children}</div>;
};