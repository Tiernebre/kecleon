import { ButtonHTMLAttributes } from "react";

type ButtonColor = "white" | "light" | "dark" | "black" | "text" | "ghost";

export type ButtonProps = {
  color?: ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps): JSX.Element => {
  const classes: string[] = ["button"];

  if (props.color) {
    classes.push(`is-${props.color.toLowerCase()}`);
  }

  const className = classes.join(" ");

  return <button className={className}>{props.children}</button>;
};
