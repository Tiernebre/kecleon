import { Color } from "../../types";

export type IconProps = {
  name: string; // https://fontawesome.com/v5/cheatsheet displays the possible names
  message?: string;
  color?: Color;
};

export const Icon = ({ name, color, message }: IconProps): JSX.Element => {
  const classes = [`fas fa-${name.toLowerCase()}`];

  if (color) {
    classes.push(`has-text-${color}`);
  }

  const className = classes.join(" ");

  return (
    <span className="icon">
      <i aria-hidden="true" title={message} className={className}></i>
      {message && (
        <span className="is-sr-only" data-testid="icon-screen-reader-message">
          {message}
        </span>
      )}
    </span>
  );
};
