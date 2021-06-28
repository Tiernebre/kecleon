export const formControlInputTypes = [
  "input",
  "select",
  "button",
  "icon",
] as const;

export type FormControlInputType = typeof formControlInputTypes[number];
