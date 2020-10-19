import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../store/orders/actions";
import { selectOrders } from "../../../../store/orders/selectors";
import moment from "moment";

interface Props {
  id: string;
}

export default function ListedItems(props: Props) {
  const { id } = props;
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const tableOrder = orders.find((order) => order.tableId === parseInt(id));

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  return (
    <div>
      <h1>Table {id}</h1>
      <h5>
        Order created at:{" "}
        {moment(tableOrder?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
      </h5>
      <h2>List of Items</h2>
      {tableOrder?.items.map((item) => (
        <div key={item.id} style={{ backgroundColor: "lightblue" }}>
          <h3>{item.name}</h3>
          <h4>Price: {item.price}</h4>
          <button>-</button>
          <button>+</button>
          <h4>Qnt: </h4>
          <p>ordered: {moment(item.createdAt).format("h:mm a")}</p>
        </div>
      ))}
    </div>
  );
}
