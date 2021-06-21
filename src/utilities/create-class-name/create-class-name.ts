export const createClassNameFromProps = <T extends Record<string, unknown>>(
  classMap: Map<keyof T, (value?: string) => string>,
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
