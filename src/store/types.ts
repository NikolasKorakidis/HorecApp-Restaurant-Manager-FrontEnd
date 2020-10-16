import { Table } from "../types/tableTypes";

export type StoreState = {
  tables: Table[];
};

export type GetState = () => StoreState;
