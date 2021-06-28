import { Label, FormControl, Input, Help } from "..";
import { FormField } from "../form-field";

type SemanticFormFieldProps = {
  id: string;
  label: string;
  help?: string;
};

/**
 * SemanticFormField is a component that combines Label, FormField,
 * and Help components to create a fully composed Form Field
 * for a typical form.
 */
export const SemanticFormField = ({
  id,
  label,
  help,
}: SemanticFormFieldProps): JSX.Element => (
  <FormField>
    <Label htmlFor={id}>{label}</Label>
    <FormControl>
      <Input id={id} type="text" value="Form Field Input"></Input>
    </FormControl>
    {help && <Help>help</Help>}
  </FormField>
);
