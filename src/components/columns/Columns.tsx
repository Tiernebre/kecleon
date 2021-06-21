import { PropsWithChildren } from "react";
import {
  ClassNameTransformFn,
  createClassNameFromProps,
} from "../../utilities";

export type ColumnsProps = PropsWithChildren<{
  mobile?: boolean;
  gapless?: boolean;
  verticallyCentered?: boolean;
  multiLine?: boolean;
  centered?: boolean;
}>;

const columnsClassNameMap = new Map<keyof ColumnsProps, ClassNameTransformFn>([
  ["mobile", () => "is-mobile"],
  ["gapless", () => "is-gapless"],
  ["verticallyCentered", () => "is-vcentered"],
  ["multiLine", () => "is-multiline"],
  ["centered", () => "is-centered"],
]);

export const Columns = ({
  mobile,
  gapless,
  children,
  verticallyCentered,
  multiLine,
  centered,
}: ColumnsProps): JSX.Element => {
  const classNameProps: Partial<ColumnsProps> = {
    mobile,
    gapless,
    children,
    verticallyCentered,
    multiLine,
    centered,
  };

  const className = createClassNameFromProps(
    columnsClassNameMap,
    classNameProps,
    ["columns"]
  );

  return <div className={className}>{children}</div>;
};
