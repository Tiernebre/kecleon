import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type FormControlProps = PropsWithChildren<{
  hasIconsLeft?: boolean;
  hasIconsRight?: boolean;
}>;

const classNameMap: ClassNameTransformMap<FormControlProps> = new Map([
  ["hasIconsLeft", () => "has-icons-left"],
  ["hasIconsRight", () => "has-icons-right"],
]);

export const FormControl = ({
  hasIconsLeft,
  hasIconsRight,
  children,
}: FormControlProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { hasIconsLeft, hasIconsRight } as Partial<FormControlProps>,
    ["control"]
  );
  return <div className={className}>{children}</div>;
};
