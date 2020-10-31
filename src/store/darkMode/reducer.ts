import { changeMode, change_mode } from "./types";

const initialState: string = "light";

export default (state = initialState, action: changeMode) => {
  switch (action.type) {
    case change_mode:
      return [action.payload];
    default:
      return state;
  }
};
