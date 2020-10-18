import { fetched_orders, OrderActionTypes } from "./types";
import { Order } from "../../types/orderTypes";

const initialState: Order[] = [];

export default (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case fetched_orders:
      return [...action.payload];
    default:
      return state;
  }
};
