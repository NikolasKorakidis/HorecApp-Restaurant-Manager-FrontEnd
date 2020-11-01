import { changeMode, change_mode } from "./types";

const initialState: boolean = false;

export default (state = initialState, action: changeMode) => {
  switch (action.type) {
    case change_mode:
      return (state = !initialState);
    default:
      return state;
  }
};
