import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Header from "./Header";

const HomeContainer = () => {
  return (
    <>
      {/* <Header /> */}

      <div>
        <main>
          <section
            className="clean-block clean-hero"
            style={{
              backgroundImage: "url(../assets/img/tech/image4.jpg)",
              colorAdjust: "100%",
            }}
          >
            <div className="text">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
              <button className="btn btn-outline-light btn-lg" type="button">
                Learn More
              </button>
            </div>
          </section>
          <section className="clean-block clean-info dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Info</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="img-thumbnail"
                    src="assets/img/scenery/image5.jpg"
                    alt="scenery"
                  />
                </div>
                <div className="col-md-6">
                  <h3>Lorem impsum dolor sit amet</h3>
                  <div className="getting-started-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-lg"
                    type="button"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomeContainer;
