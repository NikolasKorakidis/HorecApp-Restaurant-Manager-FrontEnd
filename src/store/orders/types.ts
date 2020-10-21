import { Order } from "../../types/orderTypes";

export const fetched_orders = "fetched_orders";
export const post_order = "post_order";
export const delete_order = "delete_order";
export const remove_order_from_table = "remove_order_from_table";
export const add_to_order = "add_to_order";
export const update_order = "update_order";

export type fetchOrdersSuccess = {
  type: typeof fetched_orders;
  payload: Order[];
};

export type postOrderSuccess = {
  type: typeof post_order;
  payload: Order;
};

export type deleteOrderSuccess = {
  type: typeof delete_order;
  payload: number;
};

export type removeOrderFromTable = {
  type: typeof remove_order_from_table;
  payload: {
    orderId: number;
    tableId: number;
  };
};

export type addToOrder = {
  type: typeof add_to_order;
  payload: {
    orderId: number;
    itemId: number;
  };
};

export type updateOrder = {
  type: typeof update_order;
  payload: number;
};

export type OrderActionTypes =
  | fetchOrdersSuccess
  | postOrderSuccess
  | deleteOrderSuccess
  | addToOrder
  | removeOrderFromTable
  | updateOrder;
