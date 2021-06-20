export const colors = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
] as const;

export type Color = typeof colors[number];
