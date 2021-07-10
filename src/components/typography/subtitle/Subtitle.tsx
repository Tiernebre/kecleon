import { PropsWithChildren } from "react";
import { HeadingLevel } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type SubtitleProps = PropsWithChildren<{
  level?: HeadingLevel;
}>;

const classNameMapping: ClassNameTransformMap<SubtitleProps> = new Map([
  ["level", (level: string) => `is-${level}`],
]);

export const Subtitle = ({
  level = 5,
  children,
}: SubtitleProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { level } as Partial<SubtitleProps>,
    ["subtitle"]
  );
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;
  return <Heading className={className}>{children}</Heading>;
};
