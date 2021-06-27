import { ClassNameTransformFnMapEntry } from "./create-class-name";

/**
 * Because `color` is a common prop across this design system,
 * there's a lot of redundancy for mapping it to its respective Bulma
 * class name.
 *
 * Therefore, this is a re-usable function mapping that can be used for
 * any components that support a "color" prop.
 */
export const mapClassNameForColor = (): ClassNameTransformFnMapEntry => {
  return ["color", (color: string) => `is-${color}`];
};
