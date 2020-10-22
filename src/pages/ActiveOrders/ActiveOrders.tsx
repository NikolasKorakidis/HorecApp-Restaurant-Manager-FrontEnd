import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orders/actions";
import { selectOrders } from "../../store/orders/selectors";
import OrderInterface from "../../components/NavigationBar/interfaces/OrderInterface";
import "./styles.css";

export default function ActiveOrders() {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  console.log(orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div>
      <h1>Active Orders</h1>
      <div className="categories-main-div">
        {orders?.map((order) => (
          <div key={order.id} className="orders-div">
            <OrderInterface
              createdAt={order.createdAt}
              id={order.id}
              items={order.items}
              tableId={order.tableId}
              updatedAt={order.updatedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
