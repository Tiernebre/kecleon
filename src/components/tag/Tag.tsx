import { PropsWithChildren, HTMLAttributes } from "react";
import { Color, Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
  mapClassNameForColor,
  mapClassNameForSize,
} from "../../utilities";

export type TagProps = HTMLAttributes<HTMLSpanElement> &
  PropsWithChildren<{
    color?: Color;
    size?: Size;
    rounded?: boolean;
    deletable?: boolean;
  }>;

const classNameMapping: ClassNameTransformMap<TagProps> = new Map([
  mapClassNameForColor(),
  mapClassNameForSize(),
  ["rounded", () => "is-rounded"],
  ["deletable", () => "is-delete"],
]);

export const Tag = ({
  color,
  size,
  rounded,
  children,
  deletable,
  ...props
}: TagProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { color, size, rounded, deletable } as Partial<TagProps>,
    ["tag"]
  );
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};
