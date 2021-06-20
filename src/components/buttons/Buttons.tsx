import { HTMLAttributes } from "react";

type ButtonsProps = HTMLAttributes<HTMLDivElement>;

export const Buttons = (props: ButtonsProps): JSX.Element => (
  <div className="buttons">{props.children}</div>
);
