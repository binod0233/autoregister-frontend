// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchVehicle } from "../redux";
// import { Formik, Form, Field } from "formik";
// import { useSelector, useDispatch } from "react-redux";

// const TestContainer = (props) => {
//   return (
//     <>
//       <main class="page login-page">
//         <section class="clean-block clean-form dark">
//           <div class="container">
//             <div class="block-heading">
//               <br />
//               <h2 class="text-info">Log In</h2>
//               <p>Lorem ipsum dolor sit amet, c in, mattis vitae leo.</p>
//             </div>

//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={onSubmit}
//             >
//               {(formik) => {
//                 return (
//                   <>
//                     <Form class="Form-group">
//                       <div>
//                         <Typography>{props.message}</Typography>

//                         {/* <Row class="Form-group"> */}
//                         <Col>
//                           <Field
//                             component={TextField}
//                             label="name"
//                             name="name"
//                             // size="medium"
//                             id="standard-size-small"
//                             InputProps={{ notched: "true" }}
//                           />
//                         </Col>
//                         <Col>
//                           <Field
//                             component={TextField}
//                             label="Email"
//                             name="email"
//                             size="medium"
//                             id="standard-size-medium"
//                             InputProps={{ notched: "true" }}
//                           />
//                         </Col>
//                         <Col>
//                           <Field
//                             component={TextField}
//                             label="Phone"
//                             type="phone"
//                             name="phone"
//                             size="small"
//                             id="standard-size-small"
//                             InputProps={{ notched: "true" }}
//                           />
//                         </Col>
//                         <Col>
//                           <Field
//                             component={TextField}
//                             label="vehicleNumber"
//                             name="vehicleNumber"
//                             // size="large"
//                             id="standard-size-small"
//                             InputProps={{ notched: "true" }}
//                           />
//                         </Col>
//                         <Typography align="left" variant="h6" noWrap>
//                           {/* <h6>
//                             Already have an account?
//                             <Link to="/login">
//                               <p>Log in</p>
//                             </Link>
//                           </h6> */}
//                         </Typography>
//                         <br />
//                         <Col>
//                           <Button
//                             type="submit"
//                             disabled={!formik.isValid}
//                             variant="contained"
//                             color="primary"
//                           >
//                             Submit
//                           </Button>
//                         </Col>
//                         {/* </Row> */}
//                       </div>
//                     </Form>
//                   </>
//                 );
//               }}
//             </Formik>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default TestContainer;

// // if (
// //   (payment.finestatus === false) &
// //   (payment.vehiclenumber === vnumber)
// // ) {
// //   var fineAction = (
// //     <div>
// //       <form action="https://uat.esewa.com.np/epay/main" method="POST">
// //         <input value="20" name="tAmt" type="hidden" />
// //         <input value="20" name="amt" type="hidden" />
// //         <input value="0" name="txAmt" type="hidden" />
// //         <input value="0" name="psc" type="hidden" />
// //         <input value="0" name="pdc" type="hidden" />
// //         <input value="EPAYTEST" name="scd" type="hidden" />
// //         <input value={random} name="pid" type="hidden" />
// //         <input
// //           value="http://localhost:3000/status/esewa_payment_success?q=su"
// //           type="hidden"
// //           name="su"
// //         />
// //         <input
// //           value="http://localhost:3000/status/esewa_payment_failed?q=fu"
// //           type="hidden"
// //           name="fu"
// //         />
// //         <Button
// //           type="submit"
// //           value="Submit"
// //           variant="contained"
// //           color="primary"
// //         >
// //           pay fine=200
// //         </Button>
// //       </form>
// //     </div>
// //   );

// //   return <>{fineAction}</>;
// // } else if (
// //   (payment.finestatus === true) &
// //   (payment.vehiclenumber === vnumber)
// // ) {
// //   fineAction = (
// //     <div>
// //       <h1>entry fine paid</h1>
// //     </div>
// //   );
// //   return <>{fineAction}</>;
// // }

<div
  class="container d-md-flex justify-content-md-start align-items-md-start"
  style="text-align: left;"
>
  <form>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" class="form-control item" type="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" class="form-control" type="password" />
    </div>
    <div class="form-group">
      <div class="form-check">
        <input id="checkbox" class="form-check-input" type="checkbox" />
        <label class="form-check-label" for="checkbox">
          Remember me
        </label>
      </div>
    </div>
    <button class="btn btn-primary btn-block" type="submit">
      Log In
    </button>
  </form>
  <form>
    <div class="products">
      <h3 class="title">Checkout</h3>
      <div class="item">
        <span class="price">$200</span>
        <p class="item-name">Product 1</p>
        <p class="item-description">Lorem ipsum dolor sit amet</p>
      </div>
      <div class="item">
        <span class="price">$120</span>
        <p class="item-name">Product 2</p>
        <p class="item-description">Lorem ipsum dolor sit amet</p>
      </div>
      <div class="total">
        <span>Total</span>
        <span class="price">$320</span>
      </div>
    </div>
  </form>
</div>;
