import axios from "axios";
import { Dispatch } from "redux";
import {
  delete_order,
  fetched_orders,
  OrderActionTypes,
  post_order,
} from "./types";
import { GetState } from "../types";
import { Order } from "../../types/orderTypes";

export const fetchOrdersSuccess = (orders: Order[]): OrderActionTypes => ({
  type: fetched_orders,
  payload: orders,
});

export const postOrderSuccess = (order: Order[]): OrderActionTypes => ({
  type: post_order,
  payload: order,
});

export const deleteOrderSuccess = (order: Order[]): OrderActionTypes => ({
  type: delete_order,
  payload: order,
});

export const fetchOrders = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/orders`);
    dispatch(fetchOrdersSuccess(response.data));
  };
};

export const createOrder = (id: number, tableId: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.post(`http://localhost:4000/orders`, {
      id,
      tableId,
    });
    dispatch(postOrderSuccess(response.data));
  };
};

export const deleteOrder = (id: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.delete(`http://localhost:4000/orders/${id}`);
    console.log(response.data);
    dispatch(deleteOrderSuccess(response.data));
  };
};
