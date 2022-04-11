import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import RegisterContainer from "./RegisterContainer";
import StatusContainer from "./StatusContainer";
import PaymentContainer from "./PaymentContainer";
import TestContainer from "./TestContainer";
import HomeContainer from "./HomeContainer";
import Header from "./Header";
const MainContainer = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/register" element={<RegisterContainer />} />

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
