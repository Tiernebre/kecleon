import { HeadingLevel } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type TitleProps = {
  level?: HeadingLevel;
  spaced?: boolean;
};

const classNameMapping: ClassNameTransformMap<TitleProps> = new Map([
  ["spaced", () => "is-spaced"],
]);

export const Title = ({ level = 1, spaced }: TitleProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { spaced } as Partial<TitleProps>,
    ["title"]
  );
  return <h1 className={className}>Title</h1>;
};
