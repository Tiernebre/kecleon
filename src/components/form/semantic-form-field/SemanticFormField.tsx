import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Label, FormControl, Help, FormField, FormControlProps } from "..";
import { FieldError } from "react-hook-form";

export type SemanticFormFieldProps = PropsWithChildren<{
  control?: FormControlProps;
  help?: string;
  id: string;
  label: string;
  icons?: ReactNode;
  error?: FieldError;
}>;

/**
 * SemanticFormField is a component that combines Label, FormControl,
 * and Help components to create a fully composed Form Field
 * for a typical form.
 *
 * Any given children component will have information about the form field
 * passed down to it implicitly It is recommended to use {@link Input},
 * {@link Textarea}, or {@link Select} as they have prop support for the
 * fields passed down implicitly.
 */
export const SemanticFormField = ({
  id,
  label,
  help,
  control,
  icons,
  error,
  children,
}: SemanticFormFieldProps): JSX.Element => {
  const helpId = help || error ? `${id}-help` : undefined;
  const color = error ? "danger" : undefined;

  const input = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        id,
        color,
        invalid: !!error,
        describedBy: helpId,
      });
    } else {
      return child;
    }
  });

  return (
    <FormField>
      <Label htmlFor={id}>{label}</Label>
      <FormControl {...control}>
        {icons}
        {input}
      </FormControl>
      <Help id={helpId} error={error}>
        {help}
      </Help>
    </FormField>
  );
};
