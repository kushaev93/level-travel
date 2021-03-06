import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store.getState())
