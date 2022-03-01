import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import RegisterContainer from "./RegisterContainer";
const MainContainer = () => {
  return (
    <div>
      <h1>Main Container</h1>
      <RegisterContainer />
      <Footer />
    </div>
  );
};

export default MainContainer;
