import { createStore, applyMiddleware, combineReducers } from "redux";
import registerReducer from "./reducer/registerReducer";
import paymentReducer from "./reducer/paymentReducer";
import counterReducer from "./reducer/counterReducer";
const thunkMiddleware = require("redux-thunk").default;

const mainReducer = combineReducers({
  register: registerReducer,
  payment: paymentReducer,
  counter: counterReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
