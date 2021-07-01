import { PropsWithChildren } from "react";
import { Color, Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
  mapClassNameForSize,
} from "../../utilities";

export type TagProps = PropsWithChildren<{
  color?: Color;
  size?: Size;
}>;

const classNameMapping: ClassNameTransformMap<TagProps> = new Map([
  mapClassNameForColor(),
  mapClassNameForSize(),
]);

export const Tag = ({ color, size, children }: TagProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { color, size } as Partial<TagProps>,
    ["tag"]
  );
  return <span className={className}>{children}</span>;
};
