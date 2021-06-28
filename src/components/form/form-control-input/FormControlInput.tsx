import { Input, InputProps, Select, SelectProps } from "..";
import { FormControlInputType } from "../../../types";
import { Button, ButtonProps } from "../../button";
import { Icon, IconProps } from "../../icon";

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
    case "icon":
      return <Icon {...props} />;
    case "input":
      return <Input {...props} />;
    case "select":
      return <Select {...props} />;
    default:
      return null;
  }
};
