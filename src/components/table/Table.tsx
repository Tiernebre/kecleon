import { PropsWithChildren, TableHTMLAttributes } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type TableProps = PropsWithChildren<
  TableHTMLAttributes<HTMLTableElement> & {
    bordered?: boolean;
    striped?: boolean;
    narrow?: boolean;
    hoverable?: boolean;
    fullwidth?: boolean;
  }
>;

const classNameMapping: ClassNameTransformMap<TableProps> = new Map([
  ["bordered", () => "is-bordered"],
  ["striped", () => "is-striped"],
  ["narrow", () => "is-narrow"],
  ["hoverable", () => "is-hoverable"],
  ["fullwidth", () => "is-fullwidth"],
]);

export const Table = ({
  bordered,
  striped,
  narrow,
  hoverable,
  fullwidth,
  children,
  ...props
}: TableProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { bordered, striped, narrow, hoverable, fullwidth } as Partial<TableProps>,
    ["table"]
  );
  return (
    <table {...props} className={className}>
      {children}
    </table>
  );
};
