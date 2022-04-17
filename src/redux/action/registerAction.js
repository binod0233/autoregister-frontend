import axios from "axios";
import { FETCH_VEHICLE, REGISTER_VEHICLE } from "../action/registerType";

export const fetchVehicle = (query) => {
  console.log("query datta", query);
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
        console.log("get res", res);
        const vehicle = res.data;
        dispatch(getVehicle(vehicle));
      })
      .catch((err) => console.log(err));
  };
};

export const getVehicle = (vehicles) => {
  return { type: FETCH_VEHICLE, payload: vehicles };
};

export const registerVehicle = (name, email, phone, vehicleNumber) => {
  console.log("registerVehicle", name, vehicleNumber, phone, email);
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
        console.log("well done", res.data);

        let message = "Vehicle Registered successfully";
        console.log("error da555555555555ta", message);
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

        console.log("Registration error", message);
        dispatch({
          type: REGISTER_VEHICLE,
          payload: message,
        });
      });
  };
};
