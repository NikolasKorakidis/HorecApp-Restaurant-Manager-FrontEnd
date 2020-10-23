import { Category } from "../../types/categoryTypes";
import { fetched_categories, OrderActionTypes } from "./types";

const initialState: Category[] = [];

export default (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case fetched_categories:
      return [...action.payload];
    default:
      return state;
  }
};
