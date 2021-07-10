export const positions = ["top", "bottom"] as const;

export type Position = typeof positions[number];
