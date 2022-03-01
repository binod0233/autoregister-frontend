import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVehicle } from "../redux";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";

const TestContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVehicle());
    const interval = setInterval(() => {
      dispatch(fetchVehicle());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const allVehicles = useSelector((state) => state.register.allVehicles);

  return (
    <>
      <div>hello</div>
    </>
  );
};
