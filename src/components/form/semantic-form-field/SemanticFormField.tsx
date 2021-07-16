import { forwardRef, ReactNode, Ref } from "react";
import {
  Label,
  FormControl,
  Help,
  ValidatedInput,
  InputProps,
  FormField,
  FormControlProps,
} from "..";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type SemanticFormFieldProps = {
  control?: FormControlProps;
  help?: string;
  id: string;
  input: InputProps;
  label: string;
  icons?: ReactNode;
  error?: FieldError;
  register?: UseFormRegisterReturn;
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
export const SemanticFormField = forwardRef(
  (
    {
      id,
      label,
      help,
      control,
      input,
      icons,
      error,
      register,
    }: SemanticFormFieldProps,
    ref: Ref<HTMLInputElement>
  ): JSX.Element => {
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
            {...register}
            ref={ref}
          />
        </FormControl>
        <Help id={helpId} error={error}>
          {help}
        </Help>
      </FormField>
    );
  }
);
