import { Spinner, SpinnerProps } from "..";
import styles from "./PageSpinner.module.scss";

export type PageSpinnerProps = SpinnerProps;

export const PageSpinner = (props: PageSpinnerProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <Spinner {...props} />
    </div>
  );
};
