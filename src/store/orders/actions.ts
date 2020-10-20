import axios from "axios";
import { Dispatch } from "redux";
import {
  delete_order,
  fetched_orders,
  OrderActionTypes,
  post_order,
  remove_order_from_table,
} from "./types";
import { GetState } from "../types";
import { Order } from "../../types/orderTypes";
import { updateTable } from "../tables/actions";

export const fetchOrdersSuccess = (orders: Order[]): OrderActionTypes => ({
  type: fetched_orders,
  payload: orders,
});

export const postOrderSuccess = (order: Order): OrderActionTypes => ({
  type: post_order,
  payload: order,
});

export const deleteOrderSuccess = (orderId: number): OrderActionTypes => ({
  type: delete_order,
  payload: orderId,
});

// export const removeOrderFromTable = (
//   orderId: number,
//   tableId: number
// ): OrderActionTypes => ({
//   type: remove_order_from_table,
//   payload: { orderId, tableId },
// });

export const fetchOrders = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/orders`);
    dispatch(fetchOrdersSuccess(response.data));
  };
};

export const createOrder = (tableId: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.post(`http://localhost:4000/orders`, {
      tableId,
    });
    dispatch(postOrderSuccess(response.data.newOrder));
    dispatch(updateTable(response.data.newOrder));
  };
};

export const deleteOrder = (id: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.delete(`http://localhost:4000/orders/${id}`);
    console.log(response.data);
    dispatch(deleteOrderSuccess(response.data.orderId));
  };
};
