import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTables } from "../../store/tables/actions";
import { selectTables } from "../../store/tables/selectors";
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
      {tables
        .sort((a, b) => a.id - b.id)
        // Sort Tables by Filtering the position
        // .filter((table) => table.position === "left")
        .map((table) => (
          //Table Divs
          <div
            onClick={() => console.log("hi from table " + table.id)}
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
            <button
              onClick={() => (document.location.href = `/table/${table.id}`)}
            >
              Open Table
            </button>
          </div>
        ))}
      <div className="leftSide"></div>
      <div className="rightSide"></div>
      <div className="bar"></div>
    </div>
  );
}
