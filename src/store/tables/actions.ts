import axios from "axios";
import { Dispatch } from "redux";
import { fetched_tables, TableActionTypes, update_table } from "./types";
import { Table } from "../../types/tableTypes";
import { GetState } from "../types";
import { Order } from "../../types/orderTypes";

export const fetchTablesSuccess = (tables: Table[]): TableActionTypes => ({
  type: fetched_tables,
  payload: tables,
});

export const updateTable = (order: Order): TableActionTypes => ({
  type: update_table,
  payload: order,
});

export const a = (order: Order): TableActionTypes => ({
  type: update_table,
  payload: order,
});

export const fetchTables = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/tables`);
    dispatch(fetchTablesSuccess(response.data));
  };
};
