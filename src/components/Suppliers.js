import React, { useState } from "react";
import "./Customers.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const [modal, setModal] = useState(false);

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
              Name: Hari
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
              <h4 text="primary"> username: Hari</h4>
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
