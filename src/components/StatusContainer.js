import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { registerVehicle, fetchVehicle } from "../redux";
import { fetchPayment, addPayment, updatePayment } from "../redux";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useSelector, useDispatch } from "react-redux";

// import moment from "moment";

// import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
    },
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    backgroundColor: "#fafafa",

    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: " #ededed",
  },
}));

function StatusContainer(props) {
  const classes = useStyles();
  const [status, setCurrentStatus] = useState("");
  const [vnumber, setVnumber] = useState("");
  const [pay, setPay] = useState("");
  const [sete, setSete] = useState("10");

  // const [params, setParams] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVehicle());
    const interval = setInterval(() => {
      dispatch(fetchVehicle());
    }, 9000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPayment());
    const interval = setInterval(() => {
      dispatch(fetchPayment());
    }, 9000);

    return () => clearInterval(interval);
  }, [dispatch]);

  // setParams(queryParams.q);
  // const location = searchParams.get("location")

  const allPayments = useSelector((state) => state.payment.allPayments);

  const allVehicles = useSelector((state) => state.register.allVehicles);
  // var vehicleNumber = allVehicles.map((vehicle) => vehicle.createdAt);
  var vehicleNumber2 = allVehicles.map((vehicle) => vehicle.vehiclenumber);

  

  //console.log(); // 11/3/2019
  //   let isoDate = vehicleNumber.map((vehicle) =>
  //     moment(vehicle).format("HHmmss  ")
  //   );

  // var date1 = new Date(vehicleNumber2[0]);
  // var date2 = new Date(vehicleNumber2[4]);
  // var ElapsedSeconds = (date2 - date1) / 1000;
  // var ElapsedHours = ElapsedSeconds / 3600;

  

  const initialCheck = {
    email: "",
    vehicleNumber: "",
  };

  var random = Math.floor(Math.random() * 1000000);
  if (pay === "valid") {
    var paymentStatus = allPayments.map((payment) => {
      
      let total = payment.efee + payment.fine;
      if (payment.efee === 0) {
        var paying = "entry fee paid";
      }
      if (payment.vehiclenumber === vnumber) {
        var entryAction = (
          <div>
            <div class="container">
              <main class="page payment-page">
                <section class="clean-block payment-form dark">
                  <div class="block-heading">
                    <h2 class="text-info">Payment</h2>
                    <h4 class="text-info"> Vehicle number={vnumber}</h4>

                    <h4 class="text-info">{paying}</h4>
                  </div>
                  <div class="container d-md-flex justify-content-md-start justify-content-xl-center">
                    <form>
                      <div class="products" style={{ width: "400.9px" }}>
                        <h3 class="title">Checkout</h3>
                        <div class="item">
                          <span class="price">Rs {payment.efee}</span>
                          <p class="item-name"> Entry fee</p>
                        </div>
                        <div class="item">
                          <span class="price">Rs {payment.fine}</span>
                          <p class="item-name"> Fine</p>
                        </div>
                        <div class="total">
                          <span>Total</span>
                          <span class="price">Rs {total}</span>
                        </div>
                      </div>
                    </form>

                    <form
                      action="https://uat.esewa.com.np/epay/main"
                      method="POST"
                    >
                      <div class="products" style={{ width: "400.9px" }}>
                        <h3 class="title">Esewa</h3>
                        <div class="item">
                          <span class="price">Rs {total}</span>
                          <p class="item-name"> Amount</p>
                        </div>
                      </div>
                      <input value={total} name="tAmt" type="hidden" />
                      <input value={total} name="amt" type="hidden" />
                      <input value="0" name="txAmt" type="hidden" />
                      <input value="0" name="psc" type="hidden" />
                      <input value="0" name="pdc" type="hidden" />
                      <input value="EPAYTEST" name="scd" type="hidden" />
                      <input value={random} name="pid" type="hidden" />
                      <input
                        value="http://localhost:3000/payment/esewa_payment_success?q=su"
                        type="hidden"
                        name="su"
                      />
                      <input
                        value="http://localhost:3000/payment/esewa_payment_failed?q=fu"
                        type="hidden"
                        name="fu"
                      />
                      <Button
                        type="submit"
                        value="Submit"
                        variant="contained"
                        color="primary"
                        disabled={total === 0}
                      >
                        Esewa Pay
                      </Button>
                    </form>
                  </div>
                </section>
              </main>
            </div>
          </div>
        );
        return <>{entryAction}</>;
      } else if (
        (payment.epaystatus === true) &
        (payment.vehiclenumber === vnumber)
      ) {
        entryAction = (
          <div>
            <h1>{payment.efee}</h1>
          </div>
        );
        return <>{entryAction}</>;
      }

      return <></>;
    });
    var fineStatus = allPayments.map((payment) => {
      
      if (
        (payment.finestatus === false) &
        (payment.vehiclenumber === vnumber)
      ) {
        var fineAction = (
          <div>
            {/* <form action="https://uat.esewa.com.np/epay/main" method="POST">
              <input value={payment.fine} name="tAmt" type="hidden" />
              <input value={payment.fine} name="amt" type="hidden" />
              <input value="0" name="txAmt" type="hidden" />
              <input value="0" name="psc" type="hidden" />
              <input value="0" name="pdc" type="hidden" />
              <input value="EPAYTEST" name="scd" type="hidden" />
              <input value={random} name="pid" type="hidden" />
              <input
                value="http://localhost:3000/payment/esewa_payment_success?q=su"
                type="hidden"
                name="su"
              />
              <input
                value="http://localhost:3000/payment/esewa_payment_failed?q=fu"
                type="hidden"
                name="fu"
              />
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
              >
                pay fine ={payment.fine}
              </Button>
            </form> */}
            <main class="page payment-page">
              <section class="clean-block payment-form dark">
                <div class="container">
                  <div class="block-heading">
                    <h2 class="text-info">Payment</h2>
                  </div>
                  <form>
                    <div class="products">
                      <h3 class="title">Checkout</h3>
                      <div class="item">
                        <span class="price">{paymentStatus}</span>
                        <p class="item-name"> Entry fee</p>
                      </div>
                      <div class="item">
                        <span class="price">${fineStatus}</span>
                        <p class="item-name"> Fine</p>
                      </div>
                      <div class="total">
                        <span>Total</span>
                        <span class="price">$320</span>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </main>
            <h3>{payment.fine}</h3>
          </div>
        );
        return <>{fineAction}</>;
      } else if (
        (payment.finestatus === true) &
        (payment.vehiclenumber === vnumber)
      ) {
        fineAction = (
          <div>
            <h4>{payment.fine}</h4>
          </div>
        );
        return <>{fineAction}</>;
      }

      return <></>;
    });
  }

  
  if (status === "success") {
    var registerAction = (
      <div>
        {/* <h4>Pay entry fee {vnumber}</h4>
        <h4>{paymentStatus}</h4>
        <h4>Pay fine fee {fineStatus}</h4>
        <br /> */}
        {/* <main class="page payment-page">
          <section class="clean-block payment-form dark">
            <div class="container">
              <div class="block-heading">
                <h2 class="text-info">Payment</h2>
              </div>
              <form>
                <div class="products">
                  <h3 class="title">Checkout</h3>
                  <div class="item">
                    <span class="price">{paymentStatus}</span>
                    <p class="item-name"> Entry fee</p>
                  </div>
                  <div class="item">
                    <span class="price">${fineStatus}</span>
                    <p class="item-name"> Fine</p>
                  </div>
                  <div class="total">
                    <span>Total</span>
                    <span class="price">$320</span>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main> */}
        {paymentStatus}
      </div>
    );
  }
  if (status === "failure") {
    registerAction = (
      <div>
        <h1>Vehicle not registered</h1>
      </div>
    );
  }

  const onCheck = (values, onCheckProps) => {
    
    onCheckProps.resetForm();

    let check = vehicleNumber2.includes(values.vehicleNumber);
    if (check) {
      check = "success";
      setCurrentStatus(check);
      setVnumber(values.vehicleNumber);
      setPay("valid");
    } else {
      check = "failure";
      setCurrentStatus(check);
    }
  };
  return (
    <>
      <div>
        <main class="page login-page">
          <section class="clean-block clean-form dark">
            <div class="container">
              <div class="block-heading">
                <br />
                <h2 class="text-info">Check Status </h2>
                {/* <p>Lorem ipsum dolor sit amet, c in, mattis vitae leo.</p> */}
              </div>
              <Formik
                initialValues={initialCheck}
                //   validationSchema={validationSchema}
                onSubmit={onCheck}
              >
                {(formik) => {
                  return (
                    <>
                      <Form class="Form-group">
                        {/* <Row> */}
                        <Col>
                          <Field
                            component={TextField}
                            label="Email"
                            name="email"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>

                        <Col>
                          <Field
                            component={TextField}
                            label="vehicleNumber"
                            name="vehicleNumber"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>
                        <Typography
                          align="left"
                          variant="h6"
                          noWrap
                        ></Typography>
                        <Col>
                          <br />
                          <Button
                            type="submit"
                            disabled={!formik.isValid}
                            variant="contained"
                            color="primary"
                          >
                            Check
                          </Button>
                        </Col>
                        {/* </Row> */}
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
            {registerAction}
          </section>
        </main>
      </div>
    </>
  );
}

export default StatusContainer;
