import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { registerVehicle, fetchVehicle } from "../redux";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { useSelector, useDispatch } from "react-redux";

// import { Link } from "react-router-dom";

import * as Yup from "yup";
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

function RegisterContainer(props) {
  const classes = useStyles();
  const [status, setCurrentStatus] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVehicle());
    const interval = setInterval(() => {
      dispatch(fetchVehicle());
    }, 10000000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const allVehicles = useSelector((state) => state.register.allVehicles);
  var vehicleNumber = allVehicles.map((vehicle) => vehicle.vehiclenumber);
  console.log("vehicle details", vehicleNumber);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    vehicleNumber: "",
  };
  const initialCheck = {
    email: "",
    vehicleNumber: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Enter the name"),
    email: Yup.string().email().required("Enter the email"),
    phone: Yup.string().required("Enter the phone number"),
    vehicleNumber: Yup.string().required("Enter the vehicle number"),
  });
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    props.registerVehicle(
      values.name,
      values.email,
      values.phone,
      values.vehicleNumber
    );
  };
  console.log("registerd status   ", status);
  if (status === "success") {
    var registerAction = (
      <div>
        <h1>Pay entry fee</h1>
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
    let check = vehicleNumber.includes(values.vehicleNumber);
    if (check) {
      check = "success";
      setCurrentStatus(check);
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
            <Typography>Register Vehicle</Typography>
            <Typography>{props.msg}</Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <>
                    <Form>
                      <Row>
                        <Col>
                          <Field
                            component={TextField}
                            label="name"
                            name="name"
                            size="medium"
                            id="standard-size-small"
                            InputProps={{ notched: "true" }}
                          />
                        </Col>
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
                            label="Phone"
                            type="phone"
                            name="phone"
                            size="small"
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
                        <Typography align="left" variant="h6" noWrap>
                          {/* <h6>
                            Already have an account?
                            <Link to="/login">
                              <p>Log in</p>
                            </Link>
                          </h6> */}
                        </Typography>
                        <Col>
                          <Button
                            type="submit"
                            disabled={!formik.isValid}
                            variant="contained"
                            color="primary"
                          >
                            Submit
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
        <br />
        <br />
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
        </div>
      </div>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    name: state.register.name,
    email: state.register.email,
    phone: state.register.phone,
    vehicleNumber: state.register.vehicleNumber,
    allVehicles: state.register.allVehicles,
    msg: state.register.msg,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    registerVehicle: function (name, email, phone, vehicleNumber) {
      dispatch(registerVehicle(name, email, phone, vehicleNumber));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterContainer);
