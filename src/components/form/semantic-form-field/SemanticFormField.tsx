import { Label, FormControl, Help } from "..";
import { FormControlProps } from "../form-control";
import { FormField } from "../form-field";
import { Input, InputProps } from "../input";

export type SemanticFormFieldProps = {
  control?: FormControlProps;
  help?: string;
  id: string;
  input: InputProps;
  label: string;
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
}: SemanticFormFieldProps): JSX.Element => {
  const helpId = help ? `${id}-help` : undefined;

  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <FormControl {...control}>
        <Input {...input} id={id} aria-describedby={helpId} />
      </FormControl>
      {help && <Help id={helpId}>help</Help>}
    </FormField>
  );
};
