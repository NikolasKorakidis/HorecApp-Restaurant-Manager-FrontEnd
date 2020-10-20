import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, fetchOrders } from "../../store/orders/actions";
import { selectOrders } from "../../store/orders/selectors";
import { fetchTables } from "../../store/tables/actions";
import { selectTables } from "../../store/tables/selectors";
import "./styles.css";

export default function TablesInterface() {
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);
  const orders = useSelector(selectOrders);
  console.log(orders);

  useEffect(() => {
    dispatch(fetchTables());
    dispatch(fetchOrders());
  }, []);

  return (
    <div>
      <h1>Restaurant Overview</h1>
      {tables
        .sort((a, b) => a.id - b.id)
        // Sort Tables by Filtering the position
        // .filter((table) => table.position === "left")
        .map((table) => (
          //Table Divs
          <div
            className="tablesDiv"
            key={table.id}
            style={
              table.orders.length > 0
                ? { backgroundColor: "pink" }
                : { backgroundColor: "lightgreen" }
            }
          >
            <h1>{table.id}</h1>
            <p>{table.position}</p>
            <h2>{table.orders.length > 0 ? "OCCUPIED" : "EMPTY"}</h2>
            {table.orders.length > 0 ? (
              <button
                onClick={() => (document.location.href = `/table/${table.id}`)}
              >
                Open Table
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch(createOrder(orders.length + 1, table.id))
                }
              >
                Create New Order
              </button>
            )}
          </div>
        ))}
      <div className="leftSide"></div>
      <div className="rightSide"></div>
      <div className="bar"></div>
    </div>
  );
}
