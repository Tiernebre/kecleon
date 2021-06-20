import { ButtonHTMLAttributes } from "react";
import { colors } from "../../types";
import { sizes } from "../../types/size/sizes";

export const ButtonColors = [...colors, "text", "ghost"] as const;

export const ButtonSizes = [...sizes, "normal"] as const;

export type ButtonColor = typeof ButtonColors[number];
export type ButtonSize = typeof ButtonSizes[number];

export type ButtonProps = {
  color?: ButtonColor;
  light?: boolean;
  size?: ButtonSize;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  color,
  light,
  size,
  loading,
  ...props
}: ButtonProps): JSX.Element => {
  const classes: string[] = ["button"];

  if (color) {
    classes.push(`is-${color.toLowerCase()}`);
  }
  if (light) {
    classes.push(`is-light`);
  }
  if (size) {
    classes.push(`is-${size}`);
  }
  if (loading) {
    classes.push(`is-loading`);
  }

  const className = classes.join(" ");

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
