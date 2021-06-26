import { PropsWithChildren } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import styles from "./Fade.module.css";

export type FadeProps = PropsWithChildren<{
  visible: boolean;
  durationInMillis: number;
  // called when the element is completely finished fading away
  onOutCompletion: () => void;
}>;

export const Fade = ({
  visible,
  durationInMillis,
  onOutCompletion,
  children,
}: FadeProps): JSX.Element => {
  const classNames: CSSTransitionClassNames = {
    enter: styles["fade-enter"],
    enterActive: styles["fade-enter-active"],
    exit: styles["fade-exit"],
    exitActive: styles["fade-exit-active"],
    exitDone: styles["fade-exit-done"],
  };

  return (
    <CSSTransition
      classNames={classNames}
      in={visible}
      onExited={onOutCompletion}
      timeout={durationInMillis}
    >
      <div
        className="fade-animation-container"
        style={{
          transition: `opacity ${durationInMillis}ms`,
        }}
      >
        {children}
      </div>
    </CSSTransition>
  );
};
