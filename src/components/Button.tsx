import { ButtonHTMLAttributes } from "react";

export const ButtonColors = [
  "white",
  "light",
  "dark",
  "black",
  "text",
  "ghost",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
] as const;

export type ButtonColor = typeof ButtonColors[number];

export type ButtonProps = {
  color?: ButtonColor;
  light?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps): JSX.Element => {
  const classes: string[] = ["button"];

  if (props.color) {
    classes.push(`is-${props.color.toLowerCase()}`);
  }
  if (props.light) {
    classes.push(`is-light`);
  }

  const className = classes.join(" ");

  return <button className={className}>{props.children}</button>;
};
