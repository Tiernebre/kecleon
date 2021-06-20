export const columnSizes = [
  "one-quarter",
  "one-third",
  "two-thirds",
  "half",
  "three-quarters",
  "full",
  "four-fifths",
  "three-fifths",
  "two-fifths",
  "one-fifth",
] as const;

export type ColumnSize = typeof columnSizes[number];

export type ColumnProps = {
  size?: ColumnSize;
};

export const Column = (props: ColumnProps): JSX.Element => (
  <div className="column">Column</div>
);
