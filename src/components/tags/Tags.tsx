import { PropsWithChildren } from "react";
import { Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type TagsProps = PropsWithChildren<{
  size?: Size;
  addons?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<TagsProps> = new Map([
  ["size", (size: string) => `are-${size}`],
  ["addons", () => "has-addons"],
]);

export const Tags = ({ size, addons, children }: TagsProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { size, addons } as Partial<TagsProps>,
    ["tags"]
  );
  return <div className={className}>{children}</div>;
};
