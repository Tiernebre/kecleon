import { CSSProperties, useEffect, useRef, useState } from "react";
import { Spinner, SpinnerProps } from "..";
import styles from "./PageSpinner.module.scss";

export type PageSpinnerProps = Omit<SpinnerProps, "css">;

export const PageSpinner = (props: PageSpinnerProps): JSX.Element => {
  const [css, setCss] = useState<CSSProperties>();
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const verticallyAlignedSpinnerCss: CSSProperties | undefined =
      spinnerRef.current
        ? {
            marginTop: `-${spinnerRef.current.offsetHeight / 2}px`,
          }
        : undefined;
    setCss(verticallyAlignedSpinnerCss);
  }, [spinnerRef]);

  return (
    <div className={styles.container}>
      <Spinner {...props} ref={spinnerRef} customStyle={css} />
    </div>
  );
};
