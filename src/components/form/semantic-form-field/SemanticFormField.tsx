import { Label, FormControl, Help } from "..";
import { FormControlProps } from "../form-control";
import { FormControlInput, FormControlInputProps } from "../form-control-input";
import { FormField } from "../form-field";

type SemanticFormFieldProps = {
  control: FormControlProps;
  help?: string;
  id: string;
  input: FormControlInputProps;
  label: string;
};

/**
 * SemanticFormField is a component that combines Label, FormField,
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
  const helpId = `${id}-help`;
  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <FormControl {...control}>
        <FormControlInput aria-describedby={helpId} id={id} {...input} />
      </FormControl>
      {help && <Help id={helpId}>help</Help>}
    </FormField>
  );
};
