import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Category } from "../types/categoryTypes";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addToOrder } from "../store/orders/actions";

interface Props {
  orderId: number | undefined;
  categories: Category[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

export default function SimpleAccordion(props: Props) {
  const dispatch = useDispatch();
  const { categories, orderId } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {categories.map((category) => (
        <div className="categoriestsx">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {category.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {category.items.map((item) => (
                  <div key={item.id} className="categories-item-div">
                    <Button
                      onClick={() =>
                        orderId ? dispatch(addToOrder(orderId, item.id)) : null
                      }
                      style={{ marginBottom: "5%", width: "200px" }}
                      variant="contained"
                      color="primary"
                    >
                      <p>{item.name}</p>
                    </Button>
                  </div>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
