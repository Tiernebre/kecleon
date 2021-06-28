import { Label, FormControl, Input, Help } from "..";
import { FormControlInput } from "../../../types";
import { FormField } from "../form-field";

type SemanticFormFieldProps = {
  control: FormControlInput;
  help?: string;
  id: string;
  label: string;
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
