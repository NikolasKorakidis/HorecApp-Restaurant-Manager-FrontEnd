import { combineReducers } from "redux";
// import appState from "./appState/reducer";
// import user from "./user/reducer";
import tables from "./tables/reducer";
import orders from "./orders/reducer";
import categories from "./categories/reducer";
import darkmode from "./darkMode/reducer";

export default combineReducers({
  //   appState,
  //   user,
  categories,
  orders,
  tables,
  darkmode,
});
