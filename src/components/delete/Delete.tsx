import { ButtonHTMLAttributes } from "react";
import { Size } from "../../types";

export type DeleteProps = {
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Delete = ({ size, ...buttonProps }: DeleteProps): JSX.Element => {
  return <button className="delete" {...buttonProps} />;
};
