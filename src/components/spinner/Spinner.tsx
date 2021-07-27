import { Color } from "../..";
import {
  ClassNameTransformMap,
  createClassNameFromProps,
} from "../../utilities";
import styles from "./Spinner.module.scss";

const SpinnerDot = (): JSX.Element => (
  <div className={styles.spinner_dot} aria-hidden="true" />
);

type SpinnerProps = {
  label?: string;
  color?: Color;
};

const classNameMapping: ClassNameTransformMap<SpinnerProps> = new Map([
  ["color", (color: string) => styles[`is-${color}`]],
]);

export const Spinner = ({
  label = "Loading...",
  color = "white",
}: SpinnerProps): JSX.Element => {
  const className = createClassNameFromProps(
    classNameMapping,
    { color } as Partial<SpinnerProps>,
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
