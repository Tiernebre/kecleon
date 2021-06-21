import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type ContainerProps = PropsWithChildren<{
  fluid?: boolean;
}>;

const containerClassNameMapping: ClassNameTransformMap<ContainerProps> =
  new Map([["fluid", () => "is-fluid"]]);

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
