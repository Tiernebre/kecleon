import { Fragment, PropsWithChildren, useEffect, useState } from "react";

export type ExpireProps = PropsWithChildren<{
  expiresInMillis: number;
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
}: ExpireProps): JSX.Element => {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpired(true);
    }, expiresInMillis);

    return () => {
      clearTimeout(timeout);
    };
  }, [expiresInMillis]);

  return <Fragment>{!expired && children}</Fragment>;
};
