import { Fragment, PropsWithChildren, useState } from "react";
import { useDidMount } from "../../hooks";

export type ExpireProps = PropsWithChildren<{
  expiresInMillis: number;
  onExpire?: () => void;
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
}: ExpireProps): JSX.Element => {
  const [expired, setExpired] = useState(false);

  useDidMount(() => {
    const timeout = setTimeout(() => {
      setExpired(true);
      if (onExpire) {
        onExpire();
      }
    }, expiresInMillis);

    return () => {
      clearTimeout(timeout);
    };
  });

  return <Fragment>{!expired && children}</Fragment>;
};
