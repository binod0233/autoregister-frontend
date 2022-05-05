import axios from "axios";
import { FETCH_VEHICLE, REGISTER_VEHICLE } from "../action/registerType";

export const fetchVehicle = (query) => {
  return function (dispatch) {
    var OPTION = {
      url: `http://localhost:1337/vehicles`,

      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        const vehicle = res.data;
        dispatch(getVehicle(vehicle));
      })
      .catch((err) => {});
  };
};

export const getVehicle = (vehicles) => {
  return { type: FETCH_VEHICLE, payload: vehicles };
};

export const registerVehicle = (name, email, phone, vehicleNumber) => {
  return function (dispatch) {
    var OPTIONS = {
      url: `http://localhost:1337/vehicles`,

      method: "POST",
      data: {
        name: name,
        email: email,
        phone: phone,
        vehiclenumber: vehicleNumber,
      },
      headers: { "content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        let message = "Vehicle Registered successfully";

        dispatch({
          type: REGISTER_VEHICLE,
          payload: message,
        });
      })
      .catch((err) => {
        let message = "";
        if (err) {
          message = "Email or vehicle no. already registerd";
        }

        dispatch({
          type: REGISTER_VEHICLE,
          payload: message,
        });
      });
  };
};
