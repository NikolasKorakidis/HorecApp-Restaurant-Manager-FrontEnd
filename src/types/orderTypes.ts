export type Order = {
  id: number;
  createdAt: string;
  updatedAt: string;
  tableId: number;
  items: Item[];
};

export type Item = {
  id: number;
  name: string;
  price: number;
  picture: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  orderItems: OrderItems;
};

export type OrderItems = {
  createdAt: string;
  updatedAt: string;
  itemId: number;
  orderId: number;
};
