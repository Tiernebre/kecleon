export const titleLevels = [1, 2, 3, 4, 5, 6] as const;

export type TitleLevel = typeof titleLevels[number];
