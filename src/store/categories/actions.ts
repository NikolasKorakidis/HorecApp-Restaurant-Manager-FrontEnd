import axios from "axios";
import { Dispatch } from "redux";
import { fetched_categories, OrderActionTypes } from "./types";
import { GetState } from "../types";
import { Category } from "../../types/categoryTypes";

export const fetchOrdersSuccess = (
  categories: Category[]
): OrderActionTypes => ({
  type: fetched_categories,
  payload: categories,
});

export const fetchOrders = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/categories`);
    dispatch(fetchOrdersSuccess(response.data));
  };
};
