import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTables } from "../../store/tables/actions";
import { selectTables } from "../../store/tables/selectors";

export default function TablesInterface() {
  // const [tables, setTables] = useState([]);
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);
  console.log("hi", tables);

  useEffect(() => {
    dispatch(fetchTables());
  }, []);

  return (
    <div>
      {tables.map((table) => (
        <div>
          <h1>{table.id}</h1>
          <p>{table.position}</p>
          {table.orders.length > 0 ? "FULL" : "EMPTY"}
        </div>
      ))}
      <div className="leftSide">asdasds</div>
      <div className="rightSide"></div>
      <div className="bar"></div>
    </div>
  );
}
