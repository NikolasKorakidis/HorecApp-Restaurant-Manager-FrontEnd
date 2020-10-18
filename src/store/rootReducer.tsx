import { combineReducers } from "redux";
// import appState from "./appState/reducer";
// import user from "./user/reducer";
import tables from "./tables/reducer";
import orders from "./orders/reducer";

export default combineReducers({
  //   appState,
  //   user,
  orders,
  tables,
});
