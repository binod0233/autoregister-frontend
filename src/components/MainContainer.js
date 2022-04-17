import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import RegisterContainer from "./RegisterContainer";
import StatusContainer from "./StatusContainer";
import PaymentContainer from "./PaymentContainer";
import TestContainer from "./TestContainer";
import HomeContainer from "./HomeContainer";
import Header from "./Header";
import queryString from "query-string";
import GetVehicleContainer from "./GetVehicleContainer";
import About from "./About";
// import GetVehicleContainer from "./GetVehicleContainer";

const MainContainer = () => {
  const queryParams = queryString.parse(window.location.search);
  console.log("queryParams", queryParams);
  if (queryParams.q === "su" || queryParams.q === "fu") {
    var callContainer = (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/payment/esewa_payment_success"
              element={<PaymentContainer />}
            />

            <Route
              path="/payment/esewa_payment_failed"
              element={<PaymentContainer />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else if (queryParams.q === "admin") {
    callContainer = (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<GetVehicleContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    callContainer = (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/vehicle" element={<GetVehicleContainer />} /> */}
            <Route path="/" element={<HomeContainer />} />
            <Route path="/register" element={<RegisterContainer />} />

            <Route path="/status/" element={<StatusContainer />} />
            <Route path="/about/" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
  return <div>{callContainer}</div>;
};

export default MainContainer;
