export const colors = [
  "white",
  "light",
  "dark",
  "black",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
] as const;

export type Color = typeof colors[number];
