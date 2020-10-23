import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EuroIcon from "@material-ui/icons/Euro";
import { Item } from "../../../types/orderTypes";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import TableWithItems from "../../TableWithItems";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../store/orders/actions";
import ConfirmPayment from "../../ConfirmPayment";

interface Props {
  createdAt: string;
  id: number;
  items: Item[];
  tableId: number;
  updatedAt: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function RecipeReviewCard(props: Props) {
  const { createdAt, id, items, tableId, updatedAt } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="orderId" className={classes.avatar}>
            {tableId}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`Order with ID: ${id}`}
        subheader={moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <br></br>
          {expanded ? null : (
            <div>
              Your Order has{" "}
              <strong style={{ color: "red" }}>{items.length}</strong> items.
              See the details of your Order, click here{" "}
              <strong style={{ color: "red" }}>☟</strong>
            </div>
          )}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <TableWithItems items={items} />
          </CardContent>
        </Collapse>
      </CardContent>
      <CardActions disableSpacing>
        {/* <ConfirmPayment></ConfirmPayment> */}
        <IconButton
          onClick={() => dispatch(deleteOrder(id))}
          aria-label="paycash"
        >
          <EuroIcon />
          Cash
        </IconButton>
        <IconButton
          onClick={() => dispatch(deleteOrder(id))}
          aria-label="paycreditcard"
        >
          <CreditCardIcon />
          CreditCard
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
