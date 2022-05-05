import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { registerVehicle, fetchVehicle } from "../redux";
import { addPayment, updatePayment } from "../redux";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";

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
  
  const initialValues = {
    name: "",
    phone: "",
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
    // if (props.message === "Vehicle Registered successfully") {
    props.addPayment(values.vehicleNumber, false, false, 10, 0, false);
  };

  return (
    <>
      <div>
        <main class="page login-page">
          <section class="clean-block clean-form dark">
            <div class="container">
              <div class="block-heading">
                <br />
                <h2 class="text-info"> Register vehicle</h2>
                {/* <p>Lorem ipsum dolor sit amet, c in, mattis vitae leo.</p> */}
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <>
                      <Form class="Form-group">
                        <div>
                          <Typography>{props.message}</Typography>

                          {/* <Row class="Form-group"> */}
                          <Col>
                            <Field
                              component={TextField}
                              label="name"
                              name="name"
                              // size="medium"
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
                              id="standard-size-medium"
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
                              // size="large"
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
                          <br />
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
                          {/* </Row> */}
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </section>
        </main>

        <div></div>
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
    message: state.register.message,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    registerVehicle: function (name, email, phone, vehicleNumber) {
      dispatch(registerVehicle(name, email, phone, vehicleNumber));
    },
    addPayment: function (
      vehiclenumber,
      epaystatus,
      finestatus,
      efee,
      fine,
      remark
    ) {
      dispatch(
        addPayment(vehiclenumber, epaystatus, finestatus, efee, fine, remark)
      );
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterContainer);
