import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import RestaurantOverview from "./pages/RestaurantOverview/RestaurantOverview";
import NavigationBar from "./components/NavigationBar//NavogationBar";
import Table from "./pages/TableView/TableView";
import Menu from "./pages/Menu/Menu";
import ActiveOrders from "./pages/ActiveOrders/ActiveOrders";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route strict path="/orders" component={ActiveOrders} />
        <Route strict path="/menu" component={Menu} />
        <Route strict path="/table/:tableId" component={Table} />
        <Route strict path="/restaurant" component={RestaurantOverview} />
        <Route strict path="/" component={Main} />
      </Switch>
      <NavigationBar />
    </div>
  );
}

export default App;
