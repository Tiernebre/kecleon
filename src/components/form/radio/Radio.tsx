import { InputHTMLAttributes } from "react";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const Radio = ({ children, ...props }: RadioProps): JSX.Element => {
  return (
    <label className="radio">
      <input {...props} type="radio" />
      {children}
    </label>
  );
};
