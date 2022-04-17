import { FETCH_COUNTER } from "../action/counterType";
const initialState = {
  allCounter: [],
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTER:
      return {
        ...state,
        allCounter: action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;
