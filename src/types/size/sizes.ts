export const sizes = ["small", "normal", "medium", "large"] as const;

export type Size = typeof sizes[number];
