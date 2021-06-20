export const sizes = ["small", "medium", "large"] as const;

export type Sizes = typeof sizes[number];
