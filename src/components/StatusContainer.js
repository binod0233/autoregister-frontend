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

  console.log("vehicleNumber2", vnumber);

  //console.log(); // 11/3/2019
  //   let isoDate = vehicleNumber.map((vehicle) =>
  //     moment(vehicle).format("HHmmss  ")
  //   );

  var date1 = new Date(vehicleNumber2[0]);
  var date2 = new Date(vehicleNumber2[4]);
  var ElapsedSeconds = (date2 - date1) / 1000;
  var ElapsedHours = ElapsedSeconds / 3600;

  console.log(
    "vehicle detailsdddddddddddddddddddddddddddddddddd",
    allPayments

    // moment.format(isoDate[1], "HH:mm:ss  ") -
    //   moment.format(isoDate[0], "HH:mm:ss  ")
  );

  const initialCheck = {
    email: "",
    vehicleNumber: "",
  };

  var random = Math.floor(Math.random() * 1000000);
  if (pay === "valid") {
    var paymentStatus = allPayments.map((payment) => {
      console.log("paymenssssssssssssssssddt", payment.epaystatus);
      if (
        (payment.epaystatus === false) &
        (payment.vehiclenumber === vnumber)
      ) {
        var entryAction = (
          <div>
            {/* <form action="https://uat.esewa.com.np/epay/main" method="POST">
              <input value={payment.efee} name="tAmt" type="hidden" />
              <input value={payment.efee} name="amt" type="hidden" />
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
                pay entry fee={payment.efee}
              </Button>
            </form> */}
            <h3>{payment.efee}</h3>
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
      console.log("paymenssssssssssssssssddt", payment.epaystatus);
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

  console.log("registerd status   ", status);
  if (status === "success") {
    var registerAction = (
      <div>
        {/* <h4>Pay entry fee {vnumber}</h4>
        <h4>{paymentStatus}</h4>
        <h4>Pay fine fee {fineStatus}</h4>
        <br /> */}
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
    console.log("Form data dddddddddddddddddddddddddddddd", values);
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
                <h2 class="text-info">Log In</h2>
                <p>Lorem ipsum dolor sit amet, c in, mattis vitae leo.</p>
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
          </section>
        </main>
        <div>
          <h1>{registerAction}</h1>
          {/* <h1>{vehicleNumber}</h1> */}
        </div>
      </div>
    </>
  );
}

export default StatusContainer;
