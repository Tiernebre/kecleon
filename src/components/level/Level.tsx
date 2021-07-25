import { PropsWithChildren, ReactNode } from "react";
import { HTMLTag } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type LevelProps = PropsWithChildren<{
  as?: HTMLTag;
  left?: ReactNode;
  right?: ReactNode;
  mobile?: boolean;
}>;

const classNameMap: ClassNameTransformMap<LevelProps> = new Map([
  ["mobile", () => "is-mobile"],
]);

export const Level = ({
  as: Comp = "div",
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

  return (
    <Comp className={className}>
      {left && <div className="level-left">{left}</div>}
      {children}
      {right && <div className="level-right">{right}</div>}
    </Comp>
  );
};
