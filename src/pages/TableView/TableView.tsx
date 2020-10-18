import React from "react";
import { useParams } from "react-router";
import ListedItems from "./components/ListedItems/ListedItems";

interface ParamType {
  tableId: string;
}

export default function Table() {
  const { tableId } = useParams<ParamType>();
  console.log(tableId);
  return (
    <div>
      <div className="left-slice">
        <ListedItems />
      </div>
      <div className="right-slice">
        <div className="upperDiv">
          <h2>Categories</h2>
          <p>category</p>
          <p>category</p>
          <p>category</p>
          <p>category</p>
          <p>category</p>
          <p>category</p>
          <p>category</p>
        </div>
        <div className="lowerDiv">
          <h2>Payment</h2>
          <p>Pauyment Details</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}
