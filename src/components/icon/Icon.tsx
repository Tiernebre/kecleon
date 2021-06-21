import { Color, Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";

export const iconFontSizes = ["xs", "sm", "lg", "2x"] as const;
export type IconFontSize = typeof iconFontSizes[number];

export type IconProps = {
  name: string; // https://fontawesome.com/v5/cheatsheet displays the possible names
  message?: string;
  color?: Color;
  bordered?: boolean;
  containerSize?: Size;
  fontSize?: IconFontSize;
};

const fontClassNameMapping: ClassNameTransformMap<IconProps> = new Map([
  ["color", (color: string) => `has-text-${color}`],
  ["bordered", () => "fa-border"],
  ["fontSize", (fontSize: string) => `fa-${fontSize}`],
]);

const iconClassNameMapping: ClassNameTransformMap<IconProps> = new Map([
  ["containerSize", (containerSize: string) => `is-${containerSize}`],
]);

export const Icon = ({
  name,
  color,
  message,
  bordered,
  containerSize,
  fontSize,
}: IconProps): JSX.Element => {
  const fontClassName = createClassNameFromProps(
    fontClassNameMapping,
    { color, bordered, fontSize } as Partial<IconProps>,
    [`fas fa-${name.toLowerCase()}`]
  );

  const iconClassName = createClassNameFromProps(
    iconClassNameMapping,
    { containerSize } as Partial<IconProps>,
    ["icon"]
  );

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
