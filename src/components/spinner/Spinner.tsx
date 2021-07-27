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
  color?: Color;
};

const classNameMapping: ClassNameTransformMap<SpinnerProps> = new Map([
  ["color", (color: string) => styles[`spinner-${color}`]],
]);

export const Spinner = (props: SpinnerProps): JSX.Element => {
  const className = createClassNameFromProps(classNameMapping, props, [
    styles.spinner,
  ]);

  return (
    <div className={className}>
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
    </div>
  );
};
