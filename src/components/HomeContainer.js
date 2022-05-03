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
              <h2>“AUTO-REGISTERED ENTRY-EXIT FOR VEHICLES AT BP HIGHWAY”</h2>
              <p>
                The BP Highway, also known as the Banepa Bardibas Highway, is a
                highway in eastern Nepal. It links Kathmandu Valley with the
                Eastern Terai region......
              </p>
              <button className="btn btn-outline-light btn-lg" type="button">
                Learn More
              </button>
<button className="btn btn-outline-light btn-lg" type="button">
                <a href="https://streamable.com/w4k7y6" target="_blank" rel="noopener noreferrer" style="color: rgb(2,8,13);border-color: var(--white);">Demo video</a>
              </button>
            </div>
          </section>
          <section className="clean-block clean-info dark">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">Objective</h2>
                <p>
                  The main objective of this project is to automate the timecard
                  rule intensified along with automatic tax-payment and speed
                  monitoring.
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="img-thumbnail"
                    src="assets/img/scenery/image9.jpg"
                    alt="scenery"
                  />
                </div>
                <div className="col-md-6">
                  <h3>Register Vehicle</h3>
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
                    <Link to="/register">register vehicle</Link>
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
