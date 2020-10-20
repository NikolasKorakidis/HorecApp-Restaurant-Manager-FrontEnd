import React from "react";
import { useParams } from "react-router";
import Categories from "./components/Categories/Categories";
import ListedItems from "./components/ListedItems/ListedItems";
import Payment from "./components/Payment/Payment";

interface ParamType {
  tableId: string;
}

export default function Table() {
  const { tableId } = useParams<ParamType>();
  return (
    <div className="main-table-div">
      <div className="left-slice">
        <ListedItems id={tableId} />
      </div>
      <div className="right-slice">
        <div className="upperDiv">
          <Categories />
        </div>
        <div className="lowerDiv">
          <Payment id={tableId} />
        </div>
      </div>
    </div>
  );
}
