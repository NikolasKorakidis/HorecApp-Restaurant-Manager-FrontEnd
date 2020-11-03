import { changeMode, change_mode } from "./types";

const initialState: boolean = false;
// Try localstate saving here and change the mode from app.tsx

export default (state = initialState, action: changeMode) => {
  switch (action.type) {
    case change_mode:
      return !state;
    default:
      return state;
  }
};
