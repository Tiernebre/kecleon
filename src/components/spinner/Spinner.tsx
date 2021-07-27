import { Color } from "../..";
import { Size } from "../../types";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";
import styles from "./Spinner.module.scss";

const SpinnerDot = (): JSX.Element => (
  <div className={styles.spinner_dot} aria-hidden="true" />
);

export type SpinnerProps = {
  label?: string;
  color?: Color;
  size?: Size;
};

const classNameMapping: ClassNameTransformMap<SpinnerProps> = new Map([
  ["color", (color: string) => styles[`is-${color}`]],
  ["size", (size: string) => styles[`is-${size}`]],
]);

export const Spinner = ({
  label = "Loading...",
  color = "black",
  size = "normal",
}: SpinnerProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { color, size } as Partial<SpinnerProps>,
    [styles.spinner]
  );

  return (
    <div aria-label={label} role="alert" className={className}>
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
    </div>
  );
};
