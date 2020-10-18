import { Order } from "../../types/orderTypes";

export const fetched_orders = "fetched_orders";

export type fetchOrdersSuccess = {
  type: typeof fetched_orders;
  payload: Order[];
};

export type OrderActionTypes = fetchOrdersSuccess;
