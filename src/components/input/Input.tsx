import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps): JSX.Element => {
  return <input {...props} />;
};
