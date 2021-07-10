import { PropsWithChildren } from "react";
import { HeadingLevel } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type TitleProps = PropsWithChildren<{
  level?: HeadingLevel;
  spaced?: boolean;
}>;

const classNameMapping: ClassNameTransformMap<TitleProps> = new Map([
  ["level", (level: string) => `is-${level}`],
  ["spaced", () => "is-spaced"],
]);

export const Title = ({
  level = 1,
  spaced,
  children,
}: TitleProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { spaced, level } as Partial<TitleProps>,
    ["title"]
  );
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;
  return <Heading className={className}>{children}</Heading>;
};
