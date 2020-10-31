import {
  delete_order,
  fetched_orders,
  OrderActionTypes,
  post_order,
} from "./types";
import { Order } from "../../types/orderTypes";

const initialState: Order[] = [];

export default (state = initialState, action: OrderActionTypes) => {
  switch (action.type) {
    case post_order:
      return [...state, action.payload];
    case fetched_orders:
      return [...action.payload];
    case delete_order:
      const orderId = action.payload;
      const orders = state.filter((order) => order.id !== orderId);
      return [...orders];
    default:
      return state;
  }
};
