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
  ...classNameProps
}: ColumnsProps): JSX.Element => {
  const className = createClassNameFromProps(
    columnsClassNameMap,
    classNameProps as Partial<ColumnsProps>,
    ["columns"]
  );

  return <div className={className}>{children}</div>;
};
