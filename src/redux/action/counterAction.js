import axios from "axios";
import { FETCH_COUNTER } from "./counterType";

export const fetchCounter = () => {
  return function (dispatch) {
    var OPTION = {
      url: `http://localhost:1337/counters`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };
    axios(OPTION)
      .then((res) => {
        
        const counter = res.data;
        dispatch(getCounter(counter));
      })
      .catch((err) => {});
  };
};

export const getCounter = (counter) => {
  return { type: FETCH_COUNTER, payload: counter };
};
