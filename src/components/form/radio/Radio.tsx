import { InputHTMLAttributes } from "react";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const Radio = ({ children, id, ...props }: RadioProps): JSX.Element => {
  return (
    <label htmlFor={id} className="radio">
      <input id={id} {...props} type="radio" />
      {children}
    </label>
  );
};
