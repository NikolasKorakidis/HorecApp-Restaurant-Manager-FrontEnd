import { Item } from "./orderTypes";

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  items: Item[];
};
