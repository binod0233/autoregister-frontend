import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import queryString from "query-string";

import Footer from "./Footer";
import RegisterContainer from "./RegisterContainer";
// import Esewa from "./Esewa";
import StatusContainer from "./StatusContainer";
import PaymentContainer from "./PaymentContainer";
const MainContainer = () => {
  // const queryParams = queryString.parse(window.location.search);
  // const location = searchParams.get("location")

  // console.log("parameter", queryParams.q);

  return (
    <div>
      <h1>Main Container</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterContainer />} />
          <Route
            path="/payment/esewa_payment_failed"
            element={<PaymentContainer />}
          />
          <Route
            path="/payment/esewa_payment_success"
            element={<PaymentContainer />}
          />
          <Route path="/status/" element={<StatusContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default MainContainer;
