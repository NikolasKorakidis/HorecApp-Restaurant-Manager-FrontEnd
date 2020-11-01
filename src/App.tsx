import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import RestaurantOverview from "./pages/RestaurantOverview/RestaurantOverview";
import NavigationBar from "./components/NavigationBar//NavogationBar";
import UpNavBar from "./components/NavigationBar/UpNavBar";
import Table from "./pages/TableView/TableView";
import Menu from "./pages/Menu/Menu";
import ActiveOrders from "./pages/ActiveOrders/ActiveOrders";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useSelector } from "react-redux";
import { selectMode } from "./store/darkMode/selector";

function App() {
  // const [prefersDarkMode, setIt] = useState(false);
  const mode = useSelector(selectMode);
  console.log(mode);
  // Set global state for dark mode and delete the button on top right

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: mode ? "dark" : "light",
        },
      }),
    [mode]
  );
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UpNavBar />
        {/* <button
          style={{ float: "right", backgroundColor: "lightyellow" }}
          onClick={() => setIt(!prefersDarkMode)}
        >
          {<Brightness4Icon />}
        </button> */}
        <Switch>
          <Route strict path="/orders" component={ActiveOrders} />
          <Route strict path="/menu" component={Menu} />
          <Route strict path="/table/:tableId" component={Table} />
          <Route strict path="/restaurant" component={RestaurantOverview} />
          <Route strict path="/" component={Main} />
        </Switch>
        <NavigationBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
