import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../store/orders/actions";
import { fetchTables } from "../../store/tables/actions";
import { selectTables } from "../../store/tables/selectors";
import TableCard from "../../components/TableCard";
import "./styles.css";

export default function TablesInterface() {
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);

  useEffect(() => {
    dispatch(fetchTables());
  }, []);

  return (
    <div>
      <h1>Restaurant Overview</h1>
      <div className="table-row">
        <div className="leftSideTables">
          {tables
            .sort((a, b) => a.id - b.id)
            .filter((table) => table.position === "left")
            .map((table) => (
              <TableCard tableId={table.id} tableOrders={table.orders} />
            ))}
        </div>
        <div className="rightSideTables">
          {tables
            .sort((a, b) => a.id - b.id)
            .filter((table) => table.position === "right")
            .map((table) => (
              <TableCard tableId={table.id} tableOrders={table.orders} />
            ))}
        </div>
        <div className="barSideTables">
          {tables
            .sort((a, b) => a.id - b.id)
            .filter((table) => table.position === "bar")
            .map((table) => (
              <TableCard tableId={table.id} tableOrders={table.orders} />
            ))}
        </div>
      </div>
    </div>
  );
}
