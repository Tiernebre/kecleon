import { Size } from "../../types";

export type DeleteProps = {
  size?: Size;
};

export const Delete = ({ size }: DeleteProps): JSX.Element => {
  return <button className="delete" />;
};
