import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type ColumnsProps = PropsWithChildren<{
  mobile?: boolean;
  gapless?: boolean;
  verticallyCentered?: boolean;
  multiLine?: boolean;
  centered?: boolean;
  className?: string;
}>;

const columnsClassNameMap: ClassNameTransformMap<ColumnsProps> = new Map([
  ["mobile", () => "is-mobile"],
  ["gapless", () => "is-gapless"],
  ["verticallyCentered", () => "is-vcentered"],
  ["multiLine", () => "is-multiline"],
  ["centered", () => "is-centered"],
]);

export const Columns = ({
  children,
  className = "",
  ...classNameProps
}: ColumnsProps): JSX.Element => {
  const mappedClassName = createClassNameFromProps(
    columnsClassNameMap,
    classNameProps as Partial<ColumnsProps>,
    ["columns", className]
  );

  return <div className={mappedClassName}>{children}</div>;
};
