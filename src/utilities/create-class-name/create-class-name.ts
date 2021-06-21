export const createClassName = (defaultClasses: string[] = []): string => {
  const classes = [...defaultClasses];
  return classes.join(" ");
};
