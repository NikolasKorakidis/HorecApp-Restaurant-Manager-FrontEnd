import { Order } from "./orderTypes";

export type Table = {
  id: number;
  position: string;
  orders: Order[];
};
