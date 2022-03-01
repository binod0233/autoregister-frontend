import { FETCH_VEHICLE, REGISTER_VEHICLE } from "../action/registerType";
const initialState = {
  name: "",
  email: "",
  phone: "",
  vehicleNumber: "",
  allVehicles: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLE:
      return {
        ...state,
        allVehicles: action.payload,
      };

    case REGISTER_VEHICLE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
