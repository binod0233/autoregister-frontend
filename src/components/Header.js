import React from "react";
import { Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            A R
          </Link>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/status">
                  Stauts
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
