import { combineReducers } from "redux";
import CityReducer from "./CityReducer";
import DataReducer from "./DataReducer";

export default combineReducers({
  CityReducer,
  DataReducer
});
