import {
  ADD_CITY,
  REMOVE_CITY,
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_END
} from "./constants";
import { top100Films } from "../../data";

export const getData = () => dispatch => {
    dispatch({ type: FETCHING_START });
    setTimeout(
      () => dispatch({ type: FETCHING_SUCCESS, cities: top100Films }),
      2000
    );
};

export const addCard = (val) => {
    console.log(val)
    return {type: ADD_CITY , payload: val}
}
