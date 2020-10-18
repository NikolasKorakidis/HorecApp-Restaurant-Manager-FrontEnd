import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/orders/actions";
import { selectOrders } from "../../store/orders/selectors";
import "./styles.css";

export default function Main() {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div>
      <h1 className="main-h1">Welcome Username</h1>
      <div className="buttons">
        <button
          className="main-button"
          onClick={() => (document.location.href = "/restaurant")}
        >
          Restaurant Overview
        </button>
        <button
          className="main-button"
          onClick={() => (document.location.href = "/orders")}
        >
          Active Orders
          <p>{orders.length}</p>
        </button>
        <button className="main-button">Managers View</button>
        <button className="main-button">Options</button>
        <button className="main-button">Log Out</button>
      </div>
    </div>
  );
}
