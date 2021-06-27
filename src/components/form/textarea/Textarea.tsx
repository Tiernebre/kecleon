import { TextareaHTMLAttributes } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: TextareaProps): JSX.Element => {
  return <textarea className="textarea" {...props} />;
};
