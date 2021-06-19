import { ButtonHTMLAttributes } from "react";

export const ButtonColors = [
  "white",
  "light",
  "dark",
  "black",
  "text",
  "ghost",
] as const;

type ButtonColor = typeof ButtonColors[number];

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
