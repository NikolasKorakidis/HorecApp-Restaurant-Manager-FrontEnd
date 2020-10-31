import { Category } from "../types/categoryTypes";
import { Order } from "../types/orderTypes";
import { Table } from "../types/tableTypes";

export type StoreState = {
  tables: Table[];
  orders: Order[];
  categories: Category[];
  darkmode: string;
};

export type GetState = () => StoreState;
