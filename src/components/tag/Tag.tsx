import { PropsWithChildren } from "react";
import { Color } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
} from "../../utilities";

export type TagProps = PropsWithChildren<{
  color?: Color;
}>;

const classNameMapping: ClassNameTransformMap<TagProps> = new Map([
  mapClassNameForColor(),
]);

export const Tag = ({ color, children }: TagProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { color } as Partial<TagProps>,
    ["tag"]
  );
  return <span className={className}>{children}</span>;
};
