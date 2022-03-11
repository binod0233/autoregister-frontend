import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { registerVehicle, fetchVehicle } from "../redux";
import { fetchPayment, addPayment, updatePayment } from "../redux";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useSelector, useDispatch } from "react-redux";

import queryString from "query-string";

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

function PaymentContainer(props) {
  const classes = useStyles();
  const [status, setCurrentStatus] = useState("");
  const [vnumber, setVnumber] = useState("");

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

  const queryParams = queryString.parse(window.location.search);

  const allPayments = useSelector((state) => state.payment.allPayments);
  console.log("parameter", queryParams);
  var vehicleNumber = allPayments.map((payment) => {
    if (payment.vehiclenumber === vnumber) {
      if ((queryParams.q === "su") & (queryParams.amt === "10.0")) {
        console.log(
          "vehicleNusssssssssssssssssssssssssssssssssssssssssssssssssssssmber",
          payment
        );
        dispatch(
          updatePayment(
            payment.id,
            "true",
            payment.finestatus,
            payment.fine,
            10
          )
        );
        var paid = (
          <div>
            <h1>Payment Successful</h1>
            <h2>Your payment of Rs. 10 has been received</h2>
          </div>
        );
      } else if (queryParams.q === "su") {
        dispatch(
          updatePayment(payment.id, payment.epaystatus, "true", 0, payment.efee)
        );

        paid = (
          <div>
            <h1>Payment Successful</h1>
            <h2>Your payment of Rs. 20 has been received</h2>
          </div>
        );
      } else if (queryParams.q === "fu") {
        dispatch(
          updatePayment(
            payment.id,
            payment.epaystatus,
            payment.finestatus,
            payment.fine,
            payment.efee
          )
        );
        paid = (
          <div>
            <h1>Payment Unsucessful</h1>
          </div>
        );
      }
      return <div>{paid}</div>;
    }
    return <div></div>;
  });

  const allVehicles = useSelector((state) => state.register.allVehicles);
  // var vehicleNumber = allVehicles.map((vehicle) => vehicle.createdAt);
  var vehicleNumber2 = allVehicles.map((vehicle) => vehicle.vehiclenumber);

  console.log("vehicleNumber", vehicleNumber);
  console.log("vehicleNumber2", vnumber);

  console.log("vehicle detailsdddddddddddddddddddddddddddddddddd", allPayments);

  const initialCheck = {
    vehicleNumber: "",
  };

  if (status === "failure") {
    var registerAction = (
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
            <Typography>Enter vehicle no. to conform the payment</Typography>
            <Typography>{props.msg}</Typography>

            <Formik initialValues={initialCheck} onSubmit={onCheck}>
              {(formik) => {
                return (
                  <>
                    <Form>
                      <Row>
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
          <h1>{vehicleNumber}</h1>
        </div>
      </div>
    </>
  );
}

export default PaymentContainer;
