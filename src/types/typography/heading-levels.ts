export const headingLevels = [1, 2, 3, 4, 5, 6] as const;

export type HeadingLevel = typeof headingLevels[number];
