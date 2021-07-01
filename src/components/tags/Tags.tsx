import { PropsWithChildren } from "react";
import { Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type TagsProps = PropsWithChildren<{
  size?: Size;
}>;

const classNameMapping: ClassNameTransformMap<TagsProps> = new Map([
  ["size", (size: string) => `are-${size}`],
]);

export const Tags = ({ size, children }: TagsProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { size } as Partial<TagsProps>,
    ["tags"]
  );
  return <div className={className}>{children}</div>;
};
