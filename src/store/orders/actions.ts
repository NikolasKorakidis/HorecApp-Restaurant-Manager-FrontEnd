import axios from "axios";
import { Dispatch } from "redux";
import {
  add_to_order,
  delete_order,
  fetched_orders,
  OrderActionTypes,
  post_order,
  remove_from_order,
  update_order,
} from "./types";
import { GetState } from "../types";
import { Order } from "../../types/orderTypes";
import { updateTable } from "../tables/actions";

// Fetch all orders
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

// Create an Order
export const postOrderSuccess = (order: Order): OrderActionTypes => ({
  type: post_order,
  payload: order,
});

export const createOrder = (tableId: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.post(`http://localhost:4000/orders`, {
      tableId,
    });
    dispatch(postOrderSuccess(response.data.newOrder));
    dispatch(updateTable(response.data.newOrder));
  };
};

// Delete an Order
export const deleteOrderSuccess = (orderId: number): OrderActionTypes => ({
  type: delete_order,
  payload: orderId,
});

export const deleteOrder = (id: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.delete(`http://localhost:4000/orders/${id}`);
    dispatch(deleteOrderSuccess(response.data.orderId));
  };
};

// Add to Order
export const addToOrderSuccess = (
  orderId: number,
  itemId: number
): OrderActionTypes => ({
  type: add_to_order,
  payload: { orderId, itemId },
});

export const updateOrder = (orderId: number): OrderActionTypes => ({
  type: update_order,
  payload: orderId,
});

export const addToOrder = (orderId: number, itemId: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.patch(
      `http://localhost:4000/orders/add/${orderId}`,
      {
        itemId,
      }
    );
    dispatch(addToOrderSuccess(orderId, itemId));
    // check this out
    const orders = await axios.get(`http://localhost:4000/orders`);
    dispatch(fetchOrdersSuccess(orders.data));
  };
};

// Remove From an Order
export const removeFromOrderSuccess = (
  orderId: number,
  itemId: number
): OrderActionTypes => ({
  type: remove_from_order,
  payload: { orderId, itemId },
});

export const removeFromOrder = (orderId: number, itemId: number) => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.patch(
      `http://localhost:4000/orders/remove/${orderId}`,
      {
        itemId,
      }
    );
    dispatch(removeFromOrderSuccess(orderId, itemId));
    const orders = await axios.get(`http://localhost:4000/orders`);
    dispatch(fetchOrdersSuccess(orders.data));
  };
};
