import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  const API = "http://localhost:9091/api/product/Id";
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const ProductId = (e) => {
  // (e.target.vcalue===[
  //     product.name,
  //     product.grade,
  //     product.category,
  //     product.price,
  //     product.description
  // )]
  //   }
  //   const navigate = useNavigate();

  // const viewProduct = () => {
  //   navigate("/viewproduct");
  // };
  //   const Viewproductforcart = () => {
  //     navigate(`/cartpage);
  //   };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div>
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
                <CardActions></CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productspage;
