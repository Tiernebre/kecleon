import styles from "./Column.module.css";
import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";
import { Direction } from "../..";

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
  align?: Direction;
}>;

const columnClassNameMap: ClassNameTransformMap<ColumnProps> = new Map([
  ["size", (size: string) => `is-${size}`],
  ["offset", (offset: string) => `is-offset-${offset}`],
  ["narrow", () => "is-narrow"],
  ["mobile", (mobile: string) => `is-${mobile}-mobile`],
  ["tablet", (tablet: string) => `is-${tablet}-tablet`],
  ["desktop", (desktop: string) => `is-${desktop}-desktop`],
  ["widescreen", (widescreen: string) => `is-${widescreen}-widescreen`],
  ["fullHd", (fullHd: string) => `is-${fullHd}-fullhd`],
  ["align", (align: string) => styles[align]],
]);

export const Column = ({
  children,
  ...classNameProps
}: ColumnProps): JSX.Element => {
  const className = createClassNameFromProps(
    columnClassNameMap,
    classNameProps as Partial<ColumnProps>,
    ["column"]
  );

  return <div className={className}>{children}</div>;
};
