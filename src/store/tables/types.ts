import { Table } from "../../types/tableTypes";

export const fetched_tables = "fetched_tables";
export const failed_tables = "failed_tables";

export type fetchTableSuccess = {
  type: typeof fetched_tables;
  payload: Table[];
};

export type TableActionTypes = fetchTableSuccess;
