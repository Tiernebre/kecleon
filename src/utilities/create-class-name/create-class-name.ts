export const createClassNameFromProps = <T extends Record<string, unknown>>(
  classMap: Map<keyof T, string>,
  props: Partial<T>,
  defaultClasses: string[] = []
): string => {
  const classes = [...defaultClasses];

  Object.keys(props).forEach((prop) => {
    const value = props[prop];
    if (value && classMap.get(prop)) {
      classes.push(classMap.get(prop) as string);
    }
  });

  return classes.join(" ");
};
