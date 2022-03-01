import { createStore, applyMiddleware, combineReducers } from "redux";
import registerReducer from "./reducer/registerReducer";

const thunkMiddleware = require("redux-thunk").default;

const mainReducer = combineReducers({
  register: registerReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
