import { fetched_tables, TableActionTypes, update_table } from "./types";
import { Table } from "../../types/tableTypes";

const initialState: Table[] = [];

export default (state = initialState, action: TableActionTypes) => {
  switch (action.type) {
    case fetched_tables:
      return [...action.payload];
    // Study this one
    case update_table:
      const tableId = action.payload.tableId;
      const updatedTables = state.map((t) => {
        if (tableId === t.id) {
          const updatedOrders = [...t.orders, action.payload];
          return { ...t, orders: updatedOrders };
        } else {
          return t;
        }
      });
      return updatedTables;
    default:
      return state;
  }
};
