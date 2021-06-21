import { PropsWithChildren } from "react";
import {
  ClassNameTransformFn,
  createClassNameFromProps,
} from "../../utilities";

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

const columnClassNameMap = new Map<keyof ColumnProps, ClassNameTransformFn>([
  ["size", (size: string) => `is-${size}`],
  ["offset", (offset: string) => `is-offset-${offset}`],
  ["narrow", () => "is-narrow"],
  ["mobile", (mobile: string) => `is-${mobile}-mobile`],
  ["tablet", (tablet: string) => `is-${tablet}-tablet`],
  ["desktop", (desktop: string) => `is-${desktop}-desktop`],
  ["widescreen", (widescreen: string) => `is-${widescreen}-widescreen`],
  ["fullHd", (fullHd: string) => `is-${fullHd}-fullhd`],
]);

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
  const classNameProps: Partial<ColumnProps> = {
    size,
    offset,
    narrow,
    mobile,
    tablet,
    desktop,
    widescreen,
    fullHd,
  };
  const className = createClassNameFromProps(
    columnClassNameMap,
    classNameProps,
    ["column"]
  );

  return <div className={className}>{children}</div>;
};
