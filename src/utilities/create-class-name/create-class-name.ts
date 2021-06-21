export const createClassNameFromProps = (
  classMap: Map<string, string>,
  props: Record<string, boolean>,
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
