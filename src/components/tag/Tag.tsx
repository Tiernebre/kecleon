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
  rounded?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<TagProps> = new Map([
  mapClassNameForColor(),
  mapClassNameForSize(),
  ["rounded", () => "is-rounded"],
]);

export const Tag = ({
  color,
  size,
  rounded,
  children,
}: TagProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { color, size, rounded } as Partial<TagProps>,
    ["tag"]
  );
  return <span className={className}>{children}</span>;
};
