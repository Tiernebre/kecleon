import { Fragment, PropsWithChildren, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDidMount } from "../../hooks";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import styles from "./Expire.module.css";

export type ExpireProps = PropsWithChildren<{
  expiresInMillis: number;
  onExpire?: () => void;
  fadeable?: boolean;
}>;

/**
 * Component that will hide its given children content within
 * a provided time (in milliseconds).
 *
 * By "hide", the content is entirely removed from the DOM.
 */
export const Expire = ({
  expiresInMillis,
  children,
  onExpire,
  fadeable,
}: ExpireProps): JSX.Element => {
  const [expired, setExpired] = useState(false);
  const [removed, setRemoved] = useState(false);

  const hideContent = () => {
    setRemoved(true);
    if (onExpire) {
      onExpire();
    }
  };

  useDidMount(() => {
    const timeout = setTimeout(() => {
      if (fadeable) {
        setExpired(true);
      } else {
        hideContent();
      }
    }, expiresInMillis);

    return () => {
      clearTimeout(timeout);
    };
  });

  const renderedContent = removed ? null : children;

  const classNames: CSSTransitionClassNames = {
    enter: styles["expire-enter"],
    enterActive: styles["expire-enter-active"],
    exit: styles["expire-exit"],
    exitActive: styles["expire-exit-active"],
    exitDone: styles["expire-exit-done"],
  };

  console.log(fadeable);
  return fadeable ? (
    <CSSTransition
      in={!expired}
      timeout={5000}
      classNames={classNames}
      onExited={() => hideContent()}
    >
      <div>{renderedContent}</div>
    </CSSTransition>
  ) : (
    <Fragment>{renderedContent}</Fragment>
  );
};
