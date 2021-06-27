import { ClassNameTransformFnMapEntry } from "./create-class-name";

/**
 * Because `size` is a common prop across this design system,
 * there's a lot of redundancy for mapping it to its respective Bulma
 * class name.
 *
 * Therefore, this is a re-usable function mapping that can be used for
 * any components that support a "size" prop.
 */
export const mapClassNameForSize = (): ClassNameTransformFnMapEntry => {
  return ["size", (size: string) => `is-${size}`];
};
