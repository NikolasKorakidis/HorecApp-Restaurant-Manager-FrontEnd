import { changeMode, change_mode } from "./types";

export const changeModeAction = (mode: string): changeMode => ({
  type: change_mode,
  payload: mode,
});
