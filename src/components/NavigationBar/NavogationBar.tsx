import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        value={value}
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
      </BottomNavigation>
    </div>
  );
}
