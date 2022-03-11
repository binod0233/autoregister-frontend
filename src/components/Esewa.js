import React, { useEffect, useState } from "react";
import Axios from "axios";
const Esewa = () => {
  //   const [feeds, setFeeds] = useState([]);

  //   useEffect(() => {
  //     Axios
  //       .get(
  //         "https://api.thingspeak.com/channels/1664702/fields/1.json?results=2      "
  //       )
  //       .then((res) => {
  //         setFeeds(res.data.feeds);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <div>
      <h1>Esewa</h1>

      <form action="https://uat.esewa.com.np/epay/transrec" method="GET">
        <input value="100" name="amt" type="hidden">
          {" "}
        </input>
        <input value="EPAYTEST" name="scd" type="hidden">
          {" "}
        </input>
        <input
          value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453"
          name="pid"
          type="hidden"
        >
          {" "}
        </input>
        <input value="000AE01" name="rid" type="hidden">
          {" "}
        </input>
        <input value="Submit" type="submit">
          {" "}
        </input>
      </form>
    </div>
  );
};
export default Esewa;
