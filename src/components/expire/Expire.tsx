import { Fragment, PropsWithChildren, useState } from "react";
import { useDidMount } from "../../hooks";
import { Fade } from "../fade";

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

  const renderedContent = removed ? null : children;

  return fadeable ? (
    <Fade
      visible={!expired}
      durationInMillis={fadeDurationInMillis}
      onOutCompletion={hideContent}
    >
      {renderedContent}
    </Fade>
  ) : (
    <Fragment>{renderedContent}</Fragment>
  );
};
