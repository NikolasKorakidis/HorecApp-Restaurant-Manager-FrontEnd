import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectOrders } from "../../store/orders/selectors";
import Categories from "./components/Categories/Categories";
import ListedItems from "./components/ListedItems/ListedItems";
import Payment from "./components/Payment/Payment";

interface ParamType {
  tableId: string;
}

export default function Table() {
  const { tableId } = useParams<ParamType>();
  const orders = useSelector(selectOrders);
  const thisOrderId = orders.find(
    (order) => tableId === order.tableId.toString()
  );

  return (
    <div className="main-table-div">
      <div className="left-slice">
        <ListedItems id={tableId} />
      </div>
      <div className="right-slice">
        <div className="upperDiv">
          <Categories id={tableId} orderId={thisOrderId?.id} />
        </div>
        <div className="lowerDiv">
          <Payment id={tableId} />
        </div>
      </div>
    </div>
  );
}
