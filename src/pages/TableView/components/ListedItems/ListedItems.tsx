import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../store/orders/actions";
import { selectOrders } from "../../../../store/orders/selectors";
import ItemButton from "../../../../components/NavigationBar/buttons/ItemButton";
import moment from "moment";
import "./styles.css";

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
      <div className="main-listItems-div">
        {tableOrder?.items.map((item) => (
          <div key={item.id} className="listed-item-div">
            <ItemButton
              id={item.id}
              tableId={tableOrder.id}
              name={item.name}
              price={item.price}
              picture={item.picture}
              orderItems={item.orderItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
