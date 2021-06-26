import { Fragment, PropsWithChildren, useEffect, useState } from "react";

export type ExpireProps = PropsWithChildren<{
  time: number;
}>;

export const Expire = ({ time, children }: ExpireProps): JSX.Element => {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpired(true);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return <Fragment>{!expired && children}</Fragment>;
};
