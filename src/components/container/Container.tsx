import { PropsWithChildren } from "react";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type ContainerProps = PropsWithChildren<{
  fluid?: boolean;
  className?: string;
}>;

const containerClassNameMapping: ClassNameTransformMap<ContainerProps> =
  new Map([["fluid", () => "is-fluid"]]);

export const Container = ({
  children,
  className = "",
  ...classNameProps
}: ContainerProps): JSX.Element => {
  const mappedClassName = createClassNameFromProps(
    containerClassNameMapping,
    classNameProps as Partial<ContainerProps>,
    ["container", className]
  );

  return <div className={mappedClassName}>{children}</div>;
};
