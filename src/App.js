import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainContainer from "./components/MainContainer";
//require("dotenv").config();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
