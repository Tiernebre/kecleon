import { PropsWithChildren } from "react";
import styles from "./Alerts.module.css";

export const Alerts = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  return <div className={styles.alerts}>{children}</div>;
};
