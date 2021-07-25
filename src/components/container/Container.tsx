import { PropsWithChildren } from "react";
import { HTMLTag } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export type ContainerProps = PropsWithChildren<{
  as?: HTMLTag;
  fluid?: boolean;
  className?: string;
}>;

const containerClassNameMapping: ClassNameTransformMap<ContainerProps> =
  new Map([["fluid", () => "is-fluid"]]);

export const Container = ({
  as: Comp = "div",
  children,
  className = "",
  ...classNameProps
}: ContainerProps): JSX.Element => {
  const mappedClassName = createClassNameFromProps(
    containerClassNameMapping,
    classNameProps as Partial<ContainerProps>,
    ["container", className]
  );

  return <Comp className={mappedClassName}>{children}</Comp>;
};
