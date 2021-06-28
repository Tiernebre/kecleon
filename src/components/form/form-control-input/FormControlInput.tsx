import { InputProps, SelectProps } from "..";
import { FormControlInputType } from "../../../types";
import { Button, ButtonProps } from "../../button";
import { IconProps } from "../../icon";

export type FormControlInputProps = InputProps &
  SelectProps &
  ButtonProps &
  IconProps & {
    input: FormControlInputType;
  };

export const FormControlInput = ({
  input,
  ...props
}: FormControlInputProps): JSX.Element | null => {
  switch (input) {
    case "button":
      return <Button {...props} />;
    default:
      return null;
  }
};
