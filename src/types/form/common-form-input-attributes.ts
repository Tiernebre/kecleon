import { Color } from "../color";

export type CommonFormInputAttributes = {
  id?: string;
  color?: Color;
  invalid?: boolean;
  describedBy?: string;
};
