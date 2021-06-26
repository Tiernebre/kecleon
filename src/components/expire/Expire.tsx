import { Fragment, PropsWithChildren, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDidMount } from "../../hooks";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import styles from "./Expire.module.css";

export type ExpireProps = PropsWithChildren<{
  expiresInMillis: number;
  onRemoval?: () => void;
  // I still don't know how I feel about Expire caring about fading animations...
  // Maybe in the future I can abstract this functionality out into its own animation
  // based component 🤔.
  fadeable?: boolean;
  fadeDurationInMillis?: number;
}>;

/**
 * Component that will hide its given children content within
 * a provided time (in milliseconds).
 *
 * By "hide", the content is entirely removed from the DOM.
 *
 * Also supports a fade out animation effect so that the element
 * is not removed from the DOM immediately.
 */
export const Expire = ({
  expiresInMillis,
  children,
  onRemoval,
  fadeable = false,
  fadeDurationInMillis = 500,
}: ExpireProps): JSX.Element => {
  const [expired, setExpired] = useState(false);
  const [removed, setRemoved] = useState(false);

  const hideContent = () => {
    setRemoved(true);
    if (onRemoval) {
      onRemoval();
    }
  };

  useDidMount(() => {
    const timeout = setTimeout(() => {
      setExpired(true);
      if (!fadeable) {
        hideContent();
      }
    }, expiresInMillis);

    return () => {
      clearTimeout(timeout);
    };
  });

  const classNames: CSSTransitionClassNames = {
    enter: styles["expire-enter"],
    enterActive: styles["expire-enter-active"],
    exit: styles["expire-exit"],
    exitActive: styles["expire-exit-active"],
    exitDone: styles["expire-exit-done"],
  };

  const renderedContent = removed ? null : children;

  return fadeable ? (
    <CSSTransition
      in={!expired}
      timeout={fadeDurationInMillis}
      classNames={classNames}
      onExited={hideContent}
    >
      <div
        className="expire-animation-container"
        style={{
          transition: `opacity ${fadeDurationInMillis}ms`,
        }}
      >
        {renderedContent}
      </div>
    </CSSTransition>
  ) : (
    <Fragment>{renderedContent}</Fragment>
  );
};
