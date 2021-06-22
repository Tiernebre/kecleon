import { Color } from "../color";

type AlertColor = Extract<Color, "success" | "danger" | "warning">;

export type AlertRequest = {
  message: string;
  color: AlertColor;
};
