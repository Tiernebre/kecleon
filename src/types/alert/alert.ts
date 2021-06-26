import { Color } from "../color";

export type AlertColor = Extract<Color, "success" | "danger" | "warning">;

export type AlertRequest = {
  message: string;
  color: AlertColor;
};

export type QueuedAlert = {
  id: string;
} & AlertRequest;
