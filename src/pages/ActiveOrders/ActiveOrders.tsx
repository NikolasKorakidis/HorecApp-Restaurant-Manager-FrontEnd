import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, fetchOrders } from "../../store/orders/actions";
import { selectOrders } from "../../store/orders/selectors";
import moment from "moment";

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
      {orders?.map((order) => (
        <div key={order.id} style={{ backgroundColor: "lightsalmon" }}>
          <p>{moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
          <h3> Details</h3>
          Order Id: {order.id}
          <br></br>
          Table Number: {order.tableId}
          <h3> Your order has {order.items.length} Items</h3>
          {order.items.map((item) => (
            <div key={item.id} style={{ backgroundColor: "lightsteelblue" }}>
              {item.name} Price: {item.price}€
            </div>
          ))}
          <button onClick={() => dispatch(deleteOrder(order.id))}>
            Checkout
          </button>
        </div>
      ))}
    </div>
  );
}
