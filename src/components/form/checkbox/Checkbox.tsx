import { InputHTMLAttributes } from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const Checkbox = ({
  id,
  children,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <label htmlFor={id} className="checkbox">
      <input {...props} id={id} type="checkbox" />
      {children}
    </label>
  );
};
