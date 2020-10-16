import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTablesSuccess } from "../../store/tables/actions";
import { selectTables } from "../../store/tables/selectors";

export default function TablesInterface() {
  // const [tables, setTables] = useState([]);
  const dispatch = useDispatch();
  const tables = useSelector(selectTables);
  console.log("hi", tables);

  useEffect(() => {
    dispatch(fetchTablesSuccess);
  }, []);

  return (
    <div>
      <div className="leftSide"></div>
      <div className="rightSide"></div>
      <div className="bar"></div>
    </div>
  );
}
