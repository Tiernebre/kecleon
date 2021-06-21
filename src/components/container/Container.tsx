import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{
  fluid?: boolean;
}>;

export const Container = ({ fluid, children }: ContainerProps): JSX.Element => {
  const classes = ["container"];

  if (fluid) {
    classes.push("is-fluid");
  }

  const className = classes.join(" ");

  return <div className={className}>{children}</div>;
};
