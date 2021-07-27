import styles from "./Spinner.module.css";

export const SpinnerDot = (): JSX.Element => (
  <div className={styles.spinner_dot} aria-hidden="true" />
);

export const Spinner = (): JSX.Element => {
  return (
    <div className={styles.spinner}>
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
      <SpinnerDot />
    </div>
  );
};
