import { Fragment, OptionHTMLAttributes } from "react";

type Option = OptionHTMLAttributes<HTMLOptionElement> & {
  label: "string";
};

type SelectOptionsProps = {
  options: Option[];
};

/**
 * Anytime a `select` or `Select` is used, this component can be used
 * for mapping an array of values into dynamically rendered `option` elements.
 *
 * This prevents having to do an `Array.map` everytime a Select is used and
 * options are iterated over.
 */
export const SelectOptions = ({ options }: SelectOptionsProps): JSX.Element => {
  return (
    <Fragment>
      {options.map(({ label, ...props }) => (
        <option {...props}>{label}</option>
      ))}
    </Fragment>
  );
};
