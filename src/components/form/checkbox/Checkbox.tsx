import { InputHTMLAttributes } from "react";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
};

export const Checkbox = ({ id, ...props }: CheckboxProps): JSX.Element => {
  return (
    <label htmlFor={id} className="checkbox">
      <input {...props} id={id} type="checkbox" />
    </label>
  );
};
