import React, { useState, useEffect } from "react";
import "./Customers.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import axios from "axios";

export default function ActionAreaCard() {
  const [modal, setModal] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([""]);
  const API = "https://f1e3-49-205-239-58.in.ngrok.io/api/users";
  let result;
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3ZjRmM2VmOTRjMTAwMjQ4ODI1N2QiLCJpYXQiOjE2NzEzMDc3OTh9.byX--mb6q3JeQl3_hnS6_AWkxuVA-QAb6cr2Xcw6OOA";

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let req = new Request(API, {
    method: "GET",
    headers: {
      Authentication: `Basic ${TOKEN}`,
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  });

  fetch(req)
    .then((response) => response.text())
    .then((contents) => {
      result = JSON.parse(contents);
      console.log(JSON.parse(contents).data);
      if (result.data) {
        // do something
        setData(result.data);
        console.log(result.data);
      } else {
        // do something
      }
    })
    .catch(() =>
      console.log("Can’t access " + API + " response. Blocked by browser?")
    );

  // const getAllUsers = async () => {
  //   // setLoading(true);
  //   await axios
  //     .get(API, {
  //       headers: {
  //         Authorization: `Bearer ${TOKEN}`,
  //         "Content-Type": "application/json",
  //         mode: "no-cors",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //       // setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // setLoading(false);
  //     });
  // };

  useEffect(() => {
    // getAllUsers();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Card sx={{}}>
      <CardActionArea>
        <button onClick={toggleModal}>
          <CardContent component="span">
            <Typography
              variant="h5"
              display="inline-block"
              alignItems="center"
              component="span"
              paddingLeft="250px"
              height="80px"
              paddingTop="30px"
            >
              {" "}
              Name: {data.userName}
            </Typography>

            <Typography
              display="inline-block"
              variant="h5"
              alignItems="center"
              component="span"
              paddingLeft="280px"
              height="80px"
            >
              Phone-Number: 8650087710
            </Typography>

            <Typography
              display="inline-block"
              variant="h5"
              alignItems="center"
              component="span"
              paddingLeft="280px"
              height="80px"
            >
              Organization: PMart
            </Typography>
          </CardContent>
        </button>
      </CardActionArea>
      <div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello </h2>
              <h4 text="primary"> username: {data.userName}</h4>
              <h4> phone_number: 8650087710</h4>
              <h4> email": pagri@gmail.com</h4>
              <h4> vendor_category: Juice</h4>
              <h4> role: 1</h4>
              <h4> pincode: 181818</h4>
              <h4> shop_name: PMart</h4>
              <h4> street: htreet</h4>
              <h4> area: harea"</h4>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
// }
