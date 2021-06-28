import { ReactNode } from "react";
import {
  Label,
  FormControl,
  Help,
  ValidatedInput,
  InputProps,
  FormField,
  FormControlProps,
} from "..";
import { FieldError } from "react-hook-form";

export type SemanticFormFieldProps = {
  control?: FormControlProps;
  help?: string;
  id: string;
  input: InputProps;
  label: string;
  icons?: ReactNode;
  error?: FieldError;
};

/**
 * SemanticFormField is a component that combines Label, FormControl,
 * and Help components to create a fully composed Form Field
 * for a typical form.
 *
 * Unlike these individual components, this component is based
 * upon given prop data to then render the correct components. This
 * component intentionally favors an inheritance approach vs
 * composition for spinning up standard, similar inputs.
 */
export const SemanticFormField = ({
  id,
  label,
  help,
  control,
  input,
  icons,
  error,
}: SemanticFormFieldProps): JSX.Element => {
  const helpId = help || error ? `${id}-help` : undefined;
  const valid = !error;

  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <FormControl {...control}>
        {icons}
        <ValidatedInput
          {...input}
          id={id}
          aria-describedby={helpId}
          valid={valid}
        />
      </FormControl>
      <Help id={helpId}>{help}</Help>
    </FormField>
  );
};
