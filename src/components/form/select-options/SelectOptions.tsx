import { Fragment, OptionHTMLAttributes } from "react";

type Option = OptionHTMLAttributes<HTMLOptionElement> & {
  label: "string";
};

type SelectOptionsProps = {
  options: Option[];
};

export const SelectOptions = ({ options }: SelectOptionsProps): JSX.Element => {
  return (
    <Fragment>
      <option></option>
    </Fragment>
  );
};
