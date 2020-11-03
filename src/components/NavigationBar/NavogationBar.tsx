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
import { Link } from "react-router-dom";

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
  console.log(retrievedValue);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  // Nav Bar trying to stay active on change, i setted a localstorage for now
  // it's not working tho, need to find out the reasons.

  return (
    <div>
      <BottomNavigation
        value={retrievedValue}
        onChange={handleChange}
        className={classes.root}
      >
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/restaurant">
          <BottomNavigationAction
            label="Restaurant View"
            value="restaurantview"
            icon={<RestaurantIcon />}
          />
        </Link>
        <Link to="/orders">
          <BottomNavigationAction
            label="Active Orders"
            value="activeOrders"
            icon={<EmojiFoodBeverageIcon />}
          />
        </Link>
        <Link to="/menu">
          <BottomNavigationAction
            label="Menu"
            value="menu"
            icon={<RestaurantMenuIcon />}
          />
        </Link>
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
