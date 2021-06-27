import { SelectHTMLAttributes } from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ children, ...props }: SelectProps): JSX.Element => {
  return (
    <div className="select">
      <select {...props}>{children}</select>
    </div>
  );
};
