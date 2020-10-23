import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, fetchOrders } from "../../../../store/orders/actions";
import { selectOrders } from "../../../../store/orders/selectors";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);
interface Props {
  id: string;
}

export default function Payment(props: Props) {
  const classes = useStyles();
  const { id } = props;
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const orderInThisTable = orders?.find(
    (order) => order.tableId === parseInt(id)
  );
  const deleteId = orderInThisTable?.id;
  console.log(deleteId);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  return (
    <div>
      <Button
        onClick={() => (deleteId ? dispatch(deleteOrder(deleteId)) : null)}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<EuroIcon />}
      >
        Checkout order
      </Button>
    </div>
  );
}
