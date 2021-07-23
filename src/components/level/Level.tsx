import { PropsWithChildren, ReactNode } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type LevelProps = PropsWithChildren<{
  left?: ReactNode;
  right?: ReactNode;
  mobile?: boolean;
}>;

const classNameMap: ClassNameTransformMap<LevelProps> = new Map([
  ["mobile", () => "is-mobile"],
]);

export const Level = ({
  left,
  right,
  children,
  mobile,
}: LevelProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { mobile } as Partial<LevelProps>,
    ["level"]
  );

  return <div className={className}>{children}</div>;
};
