import axios from "axios";
import { Dispatch } from "redux";
import { fetched_tables, TableActionTypes } from "./types";
import { Table } from "../../types/tableTypes";
import { GetState } from "../types";

export const fetchTablesSuccess = (tables: Table[]): TableActionTypes => ({
  type: fetched_tables,
  payload: tables,
});

export const fetchTables = () => {
  return async (dispatch: Dispatch, getState: GetState) => {
    const response = await axios.get(`http://localhost:4000/tables`);
    dispatch(fetchTablesSuccess(response.data));
  };
};
