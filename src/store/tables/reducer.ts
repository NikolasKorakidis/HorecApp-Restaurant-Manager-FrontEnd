import { fetched_tables, TableActionTypes } from "./types";
import { Table } from "../../types/tableTypes";

const initialState: Table[] = [];

export default (state = initialState, action: TableActionTypes) => {
  switch (action.type) {
    case fetched_tables:
      return [...action.payload];
    default:
      return state;
  }
};
