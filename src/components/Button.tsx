import { ButtonHTMLAttributes } from "react";

type ButtonColor = "white" | "light" | "dark" | "black" | "text" | "ghost";

export type ButtonProps = {
  color?: ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps): JSX.Element => {
  let className = "button";

  if (props.color) {
    className += `is-${props.color.toLowerCase()}`;
  }

  return <button className={className}>{props.children}</button>;
};
