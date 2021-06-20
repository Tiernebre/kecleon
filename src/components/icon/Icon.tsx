import { Color } from "../../types";

export type IconProps = {
  name: string;
  color?: Color;
};

export const Icon = ({ name, color }: IconProps): JSX.Element => {
  const classes = [`fas fa-${name.toLowerCase()}`];

  if (color) {
    classes.push(`has-text-${color}`);
  }

  const className = classes.join(" ");

  return (
    <span className="icon">
      <i className={className}></i>
    </span>
  );
};
