import { Color, Size } from "../../types";

export type IconProps = {
  name: string; // https://fontawesome.com/v5/cheatsheet displays the possible names
  message?: string;
  color?: Color;
  bordered?: boolean;
  containerSize?: Size;
};

export const Icon = ({
  name,
  color,
  message,
  bordered,
  containerSize,
}: IconProps): JSX.Element => {
  const fontClasses = [`fas fa-${name.toLowerCase()}`];
  if (color) {
    fontClasses.push(`has-text-${color}`);
  }
  if (bordered) {
    fontClasses.push("fa-border");
  }
  const fontClassName = fontClasses.join(" ");

  const iconClasses = ["icon"];
  if (containerSize) {
    iconClasses.push(`is-${containerSize}`);
  }
  const iconClassName = iconClasses.join(" ");

  return (
    <span className={iconClassName}>
      <i aria-hidden="true" title={message} className={fontClassName}></i>
      {message && (
        <span className="is-sr-only" data-testid="icon-screen-reader-message">
          {message}
        </span>
      )}
    </span>
  );
};
