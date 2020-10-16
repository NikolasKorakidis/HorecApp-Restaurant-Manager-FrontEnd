export type Table = {
  id: number;
  position: string;
  orders: Order[];
};

export type Order = {
  id: number;
  tableId: number;
};
