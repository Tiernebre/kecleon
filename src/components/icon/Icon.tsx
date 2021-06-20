import { Color } from "../../types";

export type IconProps = {
  name: string; // https://fontawesome.com/v5/cheatsheet displays the possible names
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
      <i aria-hidden="true" className={className}></i>
    </span>
  );
};
