import { createStore, applyMiddleware, combineReducers } from "redux";
import registerReducer from "./reducer/registerReducer";
import paymentReducer from "./reducer/paymentReducer";
const thunkMiddleware = require("redux-thunk").default;

const mainReducer = combineReducers({
  register: registerReducer,
  payment: paymentReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
