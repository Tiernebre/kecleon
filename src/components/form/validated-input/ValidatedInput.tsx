import { forwardRef, Ref } from "react";
import { Input, InputProps } from "../input";

export type ValidatedInputProps = InputProps & {
  valid: boolean;
};

/**
 * ValdiatedInput is a flavor of Input that has additional support for
 * semantic and accessible error indication. This indication is done via a
 * `valid` prop passed by the consumer, so there is no opinion on how
 * an input is technically validated.
 */
export const ValidatedInput = forwardRef(
  (
    { valid, ...props }: ValidatedInputProps,
    ref: Ref<HTMLInputElement>
  ): JSX.Element => {
    const color = valid ? props.color : "danger";
    return <Input {...props} color={color} aria-invalid={!valid} ref={ref} />;
  }
);
