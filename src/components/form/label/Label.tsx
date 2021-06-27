import { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ children, ...props }: LabelProps): JSX.Element => (
  <label className="label" {...props}>
    {children}
  </label>
);
