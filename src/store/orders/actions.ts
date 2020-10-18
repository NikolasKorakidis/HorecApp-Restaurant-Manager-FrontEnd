import axios from "axios";
import { Dispatch } from "redux";
import { fetched_orders, OrderActionTypes } from "./types";
import { GetState } from "../types";
import { Order } from "../../types/orderTypes";

export const fetchOrdersSuccess = (orders: Order[]): OrderActionTypes => ({
  type: fetched_orders,
  payload: orders,
});

export const fetchOrders = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/orders`);
    dispatch(fetchOrdersSuccess(response.data));
  };
};
