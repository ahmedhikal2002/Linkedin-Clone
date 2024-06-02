import { applyMiddleware, createStore } from "redux";

import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { RootReducer } from "../Reducers/RootReducer";

const Middleware = applyMiddleware(thunk, logger);
export const Store = createStore(RootReducer, Middleware);
