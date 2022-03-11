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
            <h1>dffdsffdfsff</h1>
            <form action="https://uat.esewa.com.np/epay/main" method="POST">
              <input value="10" name="tAmt" type="hidden" />
              <input value="10" name="amt" type="hidden" />
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
                pay entry fee=10
              </Button>
            </form>
          </div>
        );
        return <>{entryAction}</>;
      } else if (
        (payment.epaystatus === true) &
        (payment.vehiclenumber === vnumber)
      ) {
        entryAction = (
          <div>
            <h1>entry fine paid</h1>
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
            <h1>dffdsffdfsff</h1>
            <form action="https://uat.esewa.com.np/epay/main" method="POST">
              <input value="20" name="tAmt" type="hidden" />
              <input value="20" name="amt" type="hidden" />
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
                pay fine fee=20
              </Button>
            </form>
          </div>
        );
        return <>{fineAction}</>;
      } else if (
        (payment.finestatus === true) &
        (payment.vehiclenumber === vnumber)
      ) {
        fineAction = (
          <div>
            <h1>entry fine paid</h1>
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
        <h1>Pay entry fee {vnumber}</h1>
        <h1>{paymentStatus}</h1>
        <h1>Pay fine fee {fineStatus}</h1>
        <br />
        {/* <h2>Pay fine {fineAction}</h2> */}
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
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Paper className={classes.paper} elevation={2}>
            <Typography>Check Stauts</Typography>
            <Typography>{props.msg}</Typography>

            <Formik
              initialValues={initialCheck}
              //   validationSchema={validationSchema}
              onSubmit={onCheck}
            >
              {(formik) => {
                return (
                  <>
                    <Form>
                      <Row>
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
                          <Button
                            type="submit"
                            disabled={!formik.isValid}
                            variant="contained"
                            color="primary"
                          >
                            Check
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </Paper>
        </Grid>
        <div>
          <h1>{registerAction}</h1>
          {/* <h1>{vehicleNumber}</h1> */}
        </div>
      </div>
    </>
  );
}

export default StatusContainer;
