import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchCounter } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchPayment, fetchVehicle, updatePayment } from "../redux";
import { date } from "yup";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const GetVehicleContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCounter());
    const interval = setInterval(() => {
      dispatch(fetchCounter());
    }, 9000);
    return () => clearInterval(interval);
  }, [dispatch]);
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

  const allCounter = useSelector((state) => state.counter.allCounter);
  const allPayments = useSelector((state) => state.payment.allPayments);
  const allVehicles = useSelector((state) => state.register.allVehicles);
  // console.log("allCounter", allVehicles);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Sn</StyledTableCell>
            <StyledTableCell align="right">name</StyledTableCell>

            <StyledTableCell align="right">vehicle number</StyledTableCell>
            <StyledTableCell align="right">c1&nbsp;</StyledTableCell>
            <StyledTableCell align="right">c2&nbsp;</StyledTableCell>
            {/* <StyledTableCell align="right">c3&nbsp;</StyledTableCell> */}
            <StyledTableCell align="right">status</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {allCounter.map((counter, ids) => {
            var time1 = new Date(counter.checkpoint1);
            var time2 = new Date(counter.checkpoint2);

            var ElapsedSeconds = (time2 - time1) / 1000;
            var ElapsedHours = ElapsedSeconds / 3600;
            var vehicleNumber = allPayments.map((payment) => {
              if (payment.vehiclenumber === counter.vehiclenumber) {
                if (ElapsedSeconds > 60 && payment.remark === false) {
                  dispatch(
                    updatePayment(
                      payment.id,
                      payment.epaystatus,
                      "false",
                      20,
                      payment.efee,
                      payment.remark
                    )
                  );
                }
              }
              return <></>;
            });

            var vehicleName = allVehicles.map((vehicle) => {
              
              if (vehicle.vehiclenumber === counter.vehiclenumber) {
                return <>{vehicle.name}</>;
              }

              return <></>;
            });

            

            if (
              moment(counter.checkpoint2).format(" h:mm:ss a ") ===
              "Invalid date"
            ) {
              var random = " -------- ";
              var status2 = "running";
            } else {
              random = moment(counter.checkpoint2).format(" h:mm:ss a ");
              if (ElapsedSeconds > 60) {
                var status = "fined";
              } else {
                status = "completed";
              }
            }

            

            return (
              <>
                <div>{vehicleNumber}</div>
                <StyledTableRow
                  key={counter.ids}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {ids + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{vehicleName}</StyledTableCell>

                  <StyledTableCell align="right">
                    {counter.vehiclenumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {moment(counter.checkpoint1).format("h:mm:ss a")}
                  </StyledTableCell>
                  <StyledTableCell align="right">{random}</StyledTableCell>
                  {/* <StyledTableCell align="right">
                  {counter.checkpoint3}
                </StyledTableCell> */}
                  <StyledTableCell align="right">
                    {status}
                    {status2}
                  </StyledTableCell>
                </StyledTableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GetVehicleContainer;
