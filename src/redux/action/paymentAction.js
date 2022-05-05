import axios from "axios";
import {
  ADD_PAYMENT,
  FETCH_PAYMENT,
  UPDATE_PAYMENT,
} from "../action/paymentType";
export const fetchPayment = (query) => {
  
  return function (dispatch) {
    var OPTION = {
      url: `http://localhost:1337/payments`,

      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        
        const payment = res.data;
        dispatch(getPayment(payment));
      })
      .catch((err) => {});
  };
};

export const getPayment = (payments) => {
  return { type: FETCH_PAYMENT, payload: payments };
};

export const addPayment = (
  vehiclenumber,
  epaystatus,
  finestatus,
  efee,
  fine,
  remark
) => {
  
  return function (dispatch) {
    var OPTIONS = {
      url: `http://localhost:1337/payments`,

      method: "POST",
      data: {
        epaystatus: epaystatus,
        fine: fine,
        phonenumber: finestatus,
        vehiclenumber: vehiclenumber,
        efee: efee,
        remark: remark,
      },
      headers: { "content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        
        let message = res.data;
        if (message === true) {
          message = "payment Registered successfully";
        }
        
        dispatch({
          type: ADD_PAYMENT,
          payload: message,
        });
      })
      .catch((err) => {
        let message = "";
        if (err) {
          message = "fine or Username already taken";
        }

        
        dispatch({
          type: ADD_PAYMENT,
          payload: message,
        });
      });
  };
};

export const updatePayment = (
  id,
  epaystatus,
  finestatus,
  fine,
  efee,
  remark
) => {
  
  return function (dispatch) {
    var OPTIONS = {
      url: `http://localhost:1337/payments/${id}`,

      method: "PUT",
      data: {
        epaystatus: epaystatus,
        finestatus: finestatus,
        fine: fine,
        efee: efee,
        remark: remark,
      },
      headers: { "content-type": "application/json" },
    };

    axios(OPTIONS)
      .then((res) => {
        
        let message = res.data;
        if (message === true) {
          message = "payment Registered successfully";
        }
        // console.log("error data", message);
        dispatch({
          type: UPDATE_PAYMENT,
          payload: message,
        });
      })
      .catch((err) => {
        let message = "";
        if (err) {
          message = "fine or Username already taken";
        }

        // console.log("Registration error", err);
        dispatch({
          type: UPDATE_PAYMENT,
          payload: message,
        });
      });
  };
};
