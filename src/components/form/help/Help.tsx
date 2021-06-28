import { PropsWithChildren } from "react";
import { FieldError } from "react-hook-form";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../../utilities";

export type HelpProps = PropsWithChildren<{
  id?: string;
  error?: FieldError;
}>;

const classNameMap: ClassNameTransformMap<HelpProps> = new Map([
  ["error", () => "is-danger"],
]);

export const Help = ({ id, error, children }: HelpProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMap,
    { error } as Partial<HelpProps>,
    ["help"]
  );

  const message = error?.message ? error.message : children;

  return (
    <p id={id} className={className}>
      {message}
    </p>
  );
};
