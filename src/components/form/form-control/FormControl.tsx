import { PropsWithChildren } from "react";
import { Size } from "../../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type FormControlProps = PropsWithChildren<{
  hasIconsLeft?: boolean;
  hasIconsRight?: boolean;
  loading?: boolean;
  loadingSize?: Size;
}>;

const classNameMap: ClassNameTransformMap<FormControlProps> = new Map([
  ["hasIconsLeft", () => "has-icons-left"],
  ["hasIconsRight", () => "has-icons-right"],
  ["loading", () => "is-loading"],
  ["loadingSize", (size: string) => `is-${size}`],
]);

export const FormControl = ({
  hasIconsLeft,
  hasIconsRight,
  loading,
  loadingSize,
  children,
}: FormControlProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    {
      hasIconsLeft,
      hasIconsRight,
      loading,
      loadingSize,
    } as Partial<FormControlProps>,
    ["control"]
  );
  return <div className={className}>{children}</div>;
};
