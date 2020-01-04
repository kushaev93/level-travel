import { combineReducers } from "redux";
import CityReducer from "./CityReducer";
import DataReducer from "./DataReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
  city: CityReducer,
  data: DataReducer,
  error: ErrorReducer
});
