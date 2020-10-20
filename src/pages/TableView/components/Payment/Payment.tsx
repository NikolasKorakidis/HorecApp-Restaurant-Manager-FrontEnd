import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, fetchOrders } from "../../../../store/orders/actions";
import { selectOrders } from "../../../../store/orders/selectors";
interface Props {
  id: string;
}

export default function Payment(props: Props) {
  const { id } = props;
  const dispatch = useDispatch();
  // Need the logic here for getting the order id
  const orders = useSelector(selectOrders);
  const orderInThisTable = orders?.find(
    (order) => order.tableId === parseInt(id)
  );
  const deleteId = orderInThisTable?.id;
  console.log(deleteId);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  //Checkout needs to be not undefind, for now harcoded
  return (
    <div>
      <h1>TOTAL: </h1>
      <button onClick={() => dispatch(deleteOrder(1))}>CHECKOUT</button>
    </div>
  );
}
