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

export const Button = ({
  color,
  light,
  ...props
}: ButtonProps): JSX.Element => {
  const classes: string[] = ["button"];

  if (color) {
    classes.push(`is-${color.toLowerCase()}`);
  }
  if (light) {
    classes.push(`is-light`);
  }

  const className = classes.join(" ");

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
