import { PropsWithChildren } from "react";
import {
  ClassNameTransformFn,
  createClassNameFromProps,
} from "../../utilities";

export type ContainerProps = PropsWithChildren<{
  fluid?: boolean;
}>;

const containerClassNameMapping = new Map<
  keyof ContainerProps,
  ClassNameTransformFn
>([["fluid", () => "is-fluid"]]);

export const Container = ({
  children,
  ...classNameProps
}: ContainerProps): JSX.Element => {
  const className = createClassNameFromProps(
    containerClassNameMapping,
    classNameProps as Partial<ContainerProps>,
    ["container"]
  );

  return <div className={className}>{children}</div>;
};
