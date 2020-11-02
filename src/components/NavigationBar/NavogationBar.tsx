import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useDispatch } from "react-redux";
import { changeModeAction } from "../../store/darkMode/actions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");
  localStorage.setItem("value", value);
  const retrievedValue = localStorage.getItem("value");

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        value={retrievedValue}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={() => (document.location.href = `/`)}
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => (document.location.href = `/restaurant`)}
          label="Restaurant View"
          value="restaurantview"
          icon={<RestaurantIcon />}
        />

        <BottomNavigationAction
          onClick={() => (document.location.href = `/orders`)}
          label="Active Orders"
          value="activeOrders"
          icon={<EmojiFoodBeverageIcon />}
        />
        <BottomNavigationAction
          onClick={() => (document.location.href = `/menu`)}
          label="Menu"
          value="menu"
          icon={<RestaurantMenuIcon />}
        />
        <BottomNavigationAction
          label="Log Out"
          value="logout"
          icon={<ExitToAppIcon />}
        />
        <BottomNavigationAction
          onClick={() => dispatch(changeModeAction())}
          label="Dark Mode"
          value="dark"
          icon={<Brightness4Icon />}
        />
      </BottomNavigation>
    </div>
  );
}
