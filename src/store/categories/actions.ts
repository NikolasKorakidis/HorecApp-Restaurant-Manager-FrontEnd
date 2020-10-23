import axios from "axios";
import { Dispatch } from "redux";
import { fetched_categories, OrderActionTypes } from "./types";
import { GetState } from "../types";
import { Category } from "../../types/categoryTypes";

export const fetchCategoriesSuccess = (
  categories: Category[]
): OrderActionTypes => ({
  type: fetched_categories,
  payload: categories,
});

export const fetchCategories = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/categories`);
    dispatch(fetchCategoriesSuccess(response.data));
  };
};
