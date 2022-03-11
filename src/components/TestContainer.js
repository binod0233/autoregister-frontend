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
    }, 100000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const allVehicles = useSelector((state) => state.register.allVehicles);
  console.log(allVehicles);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default TestContainer;

// if (
//   (payment.finestatus === false) &
//   (payment.vehiclenumber === vnumber)
// ) {
//   var fineAction = (
//     <div>
//       <form action="https://uat.esewa.com.np/epay/main" method="POST">
//         <input value="20" name="tAmt" type="hidden" />
//         <input value="20" name="amt" type="hidden" />
//         <input value="0" name="txAmt" type="hidden" />
//         <input value="0" name="psc" type="hidden" />
//         <input value="0" name="pdc" type="hidden" />
//         <input value="EPAYTEST" name="scd" type="hidden" />
//         <input value={random} name="pid" type="hidden" />
//         <input
//           value="http://localhost:3000/status/esewa_payment_success?q=su"
//           type="hidden"
//           name="su"
//         />
//         <input
//           value="http://localhost:3000/status/esewa_payment_failed?q=fu"
//           type="hidden"
//           name="fu"
//         />
//         <Button
//           type="submit"
//           value="Submit"
//           variant="contained"
//           color="primary"
//         >
//           pay fine=200
//         </Button>
//       </form>
//     </div>
//   );

//   return <>{fineAction}</>;
// } else if (
//   (payment.finestatus === true) &
//   (payment.vehiclenumber === vnumber)
// ) {
//   fineAction = (
//     <div>
//       <h1>entry fine paid</h1>
//     </div>
//   );
//   return <>{fineAction}</>;
// }
