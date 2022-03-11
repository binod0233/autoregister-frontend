import {
  ADD_PAYMENT,
  FETCH_PAYMENT,
  UPDATE_PAYMENT,
} from "../action/paymentType";
const initialState = {
  fineStatus: "",
  epayStatus: "",

  efee: NaN,
  fine: NaN,
  vehiclenumber: NaN,
  allPayments: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENT:
      return {
        ...state,
        allPayments: action.payload,
      };

    case ADD_PAYMENT:
      return {
        ...state,
        message: action.payload,
      };

    case UPDATE_PAYMENT:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
