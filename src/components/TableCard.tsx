import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Order } from "../types/orderTypes";
import { useDispatch } from "react-redux";
import { createOrder } from "../store/orders/actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    maxWidth: 250,
    minHeight: 150,
    maxHeight: 250,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface Props {
  tableId: number;
  tableOrders: Order[];
}

export default function OutlinedCard(props: Props) {
  const dispatch = useDispatch();
  const { tableId, tableOrders } = props;
  const classes = useStyles();

  return (
    <Card
      style={
        tableOrders.length > 0
          ? { backgroundColor: "pink" }
          : { backgroundColor: "lightgreen" }
      }
      className={classes.root}
      variant="outlined"
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          restaurapp
        </Typography>
        <Typography variant="h5" component="h2">
          Table number: {tableId}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {tableOrders.length > 0 ? "occupied" : "free"}
        </Typography>
      </CardContent>
      <CardActions>
        {tableOrders.length > 0 ? (
          <div>
            <Link to={`/table/${tableId}`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ width: "180%", margin: "0 auto 1rem" }}
              >
                Open Table
              </Button>
            </Link>
          </div>
        ) : (
          <Button
            onClick={() => dispatch(createOrder(tableId))}
            style={{ width: "100%", margin: "0 auto 1rem" }}
            variant="contained"
            color="default"
            size="small"
          >
            Create new Order
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
