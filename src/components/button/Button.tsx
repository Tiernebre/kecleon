import { ButtonHTMLAttributes } from "react";
import { colors } from "../../types";
import { sizes } from "../../types/size/sizes";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export const ButtonColors = [...colors, "text", "ghost"] as const;

export const ButtonSizes = [...sizes, "normal"] as const;

export type ButtonColor = typeof ButtonColors[number];
export type ButtonSize = typeof ButtonSizes[number];

export type ButtonProps = {
  color?: ButtonColor;
  light?: boolean;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonClassNameMapping: ClassNameTransformMap<ButtonProps> = new Map([
  ["color", (color: string) => `is-${color.toLowerCase()}`],
  ["light", () => "is-light"],
  ["size", (size: string) => `is-${size}`],
  ["loading", () => `is-loading`],
  ["fullWidth", () => "is-fullwidth"],
]);

export const Button = ({
  color,
  light,
  size,
  loading,
  fullWidth,
  ...props
}: ButtonProps): JSX.Element => {
  const classNameProps: Partial<ButtonProps> = {
    color,
    light,
    size,
    loading,
    fullWidth,
  };

  const className = createClassNameFromProps(
    buttonClassNameMapping,
    classNameProps,
    ["button"]
  );

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};
