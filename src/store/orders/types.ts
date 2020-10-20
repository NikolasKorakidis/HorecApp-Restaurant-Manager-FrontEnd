import { Order } from "../../types/orderTypes";

export const fetched_orders = "fetched_orders";
export const post_order = "post_order";
export const delete_order = "delete_order";
export const remove_order_from_table = "remove_order_from_table";

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

// export type removeOrderFromTable = {
//   action: typeof remove_order_from_table;
//   payload: {
//     orderId: string;
//     tableId: string;
//   };
// };

export type OrderActionTypes =
  | fetchOrdersSuccess
  | postOrderSuccess
  | deleteOrderSuccess;
// | removeOrderFromTable;
