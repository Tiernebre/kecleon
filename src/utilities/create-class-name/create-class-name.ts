export type ClassNameTransformFn = (() => string) | ((value: string) => string);

/**
 * Returns a formatted className given information about props. A Map
 * is provided that allows a consumer to specify transformation behavior
 * that determines what class names should be generated based upon
 * the "truthy"ness of a given property value.
 *
 * Only properties that are considered truthy will have their transform functions
 * called. Falsy properties will be ignored.
 *
 * @param classMap A mapping of transform functions that is keyed based upon prop keys.
 * @param props The props, usually these would be 1:1  with the props of an associated React component.
 * @param defaultClasses Default classes to always include no matter what
 * @returns A single string that contains all of the classes generated based upon the "truthy"ness of given properties.
 */
export const createClassNameFromProps = <T extends Record<string, unknown>>(
  classMap: Map<keyof T, ClassNameTransformFn>,
  props: Partial<T>,
  defaultClasses: string[] = []
): string => {
  const classes = [...defaultClasses];

  Object.keys(props).forEach((prop) => {
    const value = props[prop];
    if (value) {
      const transform = classMap.get(prop);
      if (transform) {
        classes.push(transform(value as string));
      }
    }
  });

  return classes.join(" ");
};
