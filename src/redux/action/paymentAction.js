import axios from "axios";
import {
  ADD_PAYMENT,
  FETCH_PAYMENT,
  UPDATE_PAYMENT,
} from "../action/paymentType";
export const fetchPayment = (query) => {
  console.log("query datta", query);
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
        console.log("get res", res);
        const payment = res.data;
        dispatch(getPayment(payment));
      })
      .catch((err) => console.log(err));
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
  console.log(
    "addPayment",
    epaystatus,
    finestatus,
    vehiclenumber,
    efee,
    fine,
    remark
  );
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
        console.log("well done", res.data);
        let message = res.data;
        if (message === true) {
          message = "payment Registered successfully";
        }
        console.log("error data", message);
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

        console.log("Registration error", err);
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
  console.log("updatePayment", id, epaystatus, finestatus, fine, efee, remark);
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
        console.log("well done", res.data);
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
