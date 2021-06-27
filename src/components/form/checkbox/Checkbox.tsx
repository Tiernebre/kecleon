import { InputHTMLAttributes } from "react";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
};

export const Checkbox = ({
  id,
  children,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <label htmlFor={id} className="checkbox">
      {children}
      <input {...props} id={id} type="checkbox" />
    </label>
  );
};
