import React from "react";
import { useDispatch } from "react-redux";

import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { addToOrder, removeFromOrder } from "../../../store/orders/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginBottom: "5%",
      maxWidth: "400",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      maxWidth: 200,
    },
    content: {
      flex: "1 0 auto",
      minWidth: 150,
    },
    cover: {
      minWidth: 100,
      maxWidth: 300,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

interface Props {
  id: number;
  name: string;
  tableId: any;
  price: number;
  picture: string;
  orderItems: any;
}

export default function MediaControlCard(props: Props) {
  const { id, name, tableId, price, picture, orderItems } = props;
  console.log("It's here", tableId, id);
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Quantity: {orderItems.qnt}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            <RemoveCircleIcon
              onClick={() => dispatch(removeFromOrder(tableId, id))}
            />
          </IconButton>
          <IconButton aria-label="next">
            <AddCircleIcon onClick={() => dispatch(addToOrder(tableId, id))} />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={picture}
        title="itempicture"
      />
    </Card>
  );
}
