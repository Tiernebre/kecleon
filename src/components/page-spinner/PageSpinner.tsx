import { useRef } from "react";
import { Spinner, SpinnerProps } from "..";
import styles from "./PageSpinner.module.scss";

export type PageSpinnerProps = Omit<SpinnerProps, "css">;

export const PageSpinner = (props: PageSpinnerProps): JSX.Element => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <Spinner {...props} ref={spinnerRef} />
    </div>
  );
};
