import {
  ADD_CITY,
  REMOVE_CITY,
  FETCHING_START,
  FETCHING_SUCCESS,
  ERROR,
  CLEAR_ERROR
} from "./constants";
import { top100Films } from "../../data";

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_START });
  setTimeout(
    () => dispatch({ type: FETCHING_SUCCESS, cities: top100Films }),
    2000
  );
};

export const errAction = message => {
  return { type: ERROR, payload: message };
};

export const clearErr = () => {
  return { type: CLEAR_ERROR };
};

export const addCard = (title,year) => {
  console.log(year)
  return { type: ADD_CITY, payload: {title: title, year:year}};
};

export const removeCard = title => {
  return { type: REMOVE_CITY, payload: title };
};

export const sortBy = (tip,data) => {
  return { type: tip, payload:data}
}
