import { Color } from "../../types";
import { ClassNameTransformFnMapEntry } from "./create-class-name";

type HasColorProp = {
  color?: Color;
};

/**
 * Because `color` is a common prop across this design system,
 * there's a lot of redundancy for mapping it to its respective Bulma
 * class name.
 *
 * Therefore, this is a re-usable function mapping that can be used for
 * any components that support a "color" prop.
 */
export const mapClassNameForColor = <
  T extends HasColorProp
>(): ClassNameTransformFnMapEntry<T> => {
  return ["color", (color: string) => `is-${color}`];
};
