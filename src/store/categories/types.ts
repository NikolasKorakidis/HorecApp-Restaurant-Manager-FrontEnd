import { Category } from "../../types/categoryTypes";

export const fetched_categories = "fetched_categories";

export type fetchCategoriesSuccess = {
  type: typeof fetched_categories;
  payload: Category[];
};

export type OrderActionTypes = fetchCategoriesSuccess;
