import { Order } from "../../types/orderTypes";
import { Table } from "../../types/tableTypes";

export const fetched_tables = "fetched_tables";
export const failed_tables = "failed_tables";
export const update_table = "update_table";

export type fetchTableSuccess = {
  type: typeof fetched_tables;
  payload: Table[];
};
export type updateTable = {
  type: typeof update_table;
  payload: Order;
};

export type TableActionTypes = fetchTableSuccess | updateTable;
