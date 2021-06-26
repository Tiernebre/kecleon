export const directions = ["left", "right"] as const;

export type Direction = typeof directions[number];
