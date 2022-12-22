import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Customers.css";
import Viewproductforcart from "./Viewproductforcart";

function Productspage() {
  const [data, setData] = useState([""]);
  const API = "http://localhost:9091/api/products";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3ZjRmM2VmOTRjMTAwMjQ4ODI1N2QiLCJpYXQiOjE2NzEzMDc3OTh9.byX--mb6q3JeQl3_hnS6_AWkxuVA-QAb6cr2Xcw6OOA";
  const getAllProducts = async () => {
    // setLoading(true);
    await axios
      .get(API, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
          // mode: "no-cors",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  };
  
    const navigate = useNavigate();

//   const viewProduct = () => {
//     navigate("/viewproduct");
//   };
    const Viewproductforcart = () => {
      navigate("/cartpage");
    };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div className="fullcard">
        <div className="card">
          {data.map((product) => (
            <div>
              <Card className="insidecard" sx={{ marginBottom: 5 }}>
                {/* <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              /> */}
                <CardContent>
                  {/* <CardMedia component="img" alt="fruits" height="140" image="" /> */}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="span"
                    color="text.primary"
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Price:{product.price}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Grade:{product.grade}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Category:{product.category}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Quantity:{product.stock}
                  </Typography>
                  {/* <br></br> */}
                </CardContent>
                <CardActions className="cartbutton">
              
                 
                    <Button onClick={Viewproductforcart}>view </Button>
                 
                  
                </CardActions>

              </Card>

              {/* <div></div>
            <div>
              <h4 text="primary"> Name: {user.name}</h4>
              <h4> Price: {user.price}</h4>
              <h4> Description: {user.description}</h4> */}
              {/* <h4> vendor_category: Juice</h4>
                  <h4> role: {user.role}</h4>
                  <h4> pincode: </h4>
                  <h4> shop_name: PMart</h4>
                  <h4> street: htreet</h4>
                  <h4> area: harea"</h4>
                  <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                  </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productspage;
