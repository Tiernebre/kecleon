export const createClassNameFromProps = (
  classMap: Map<string, string>,
  properties: Record<string, boolean>,
  defaultClasses: string[] = []
): string => {
  const classes = [...defaultClasses];

  Object.keys(properties).forEach((property) => {
    if (property && classMap.get(property)) {
      classes.push(classMap.get(property) as string);
    }
  });

  return classes.join(" ");
};
