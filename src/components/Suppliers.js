// import React, { useState, useEffect } from "react";
// import "./Customers.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import axios from "axios";
// export default function ActionAreaCard() {
//   const [modal, setModal] = useState(false);
//   // const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([""]);
//   const API = "http://localhost:9091/api/users";
//   const TOKEN =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3ZjRmM2VmOTRjMTAwMjQ4ODI1N2QiLCJpYXQiOjE2NzEzMDc3OTh9.byX--mb6q3JeQl3_hnS6_AWkxuVA-QAb6cr2Xcw6OOA";
//   const getAllUsers = async () => {
//     // setLoading(true);
//     await axios
//       .get(API, {
//         headers: {
//           Authorization: `Bearer ${TOKEN}`,
//           "Content-Type": "application/json",
//           // mode: "no-cors",
//         },
//       })
//       .then((res) => {
//         setData(res.data);
//         console.log(data);
//         // setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         // setLoading(false);
//       });
//   };
//   useEffect(() => {
//     getAllUsers();
//   });
//   const toggleModal = () => {
//     setModal(!modal);
//   };
//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   return (
//     <div>
//       {data
//         .filter((user) => user.role === 3)
//         .map((user) => (
//           <Card sx={{ maxWidth: "100%" }}>
//             <br />
//             <CardActionArea>
//               <button onClick={toggleModal}>
//                 <CardContent component="span">
//                   <Typography
//                     variant="h6"
//                     display="inline-block"
//                     alignItems="center"
//                     component="span"
//                     paddingLeft="150px"
//                     height="50px"
//                     paddingTop="30px"
//                   >
//                     {" "}
//                     Name: {user.username}
//                   </Typography>
//                   <Typography
//                     display="inline-block"
//                     variant="h6"
//                     alignItems="center"
//                     component="span"
//                     paddingLeft="250px"
//                     height="50px"
//                   >
//                     Phone-Number: {user.phone_number}
//                   </Typography>
//                   <Typography
//                     display="inline-block"
//                     variant="h6"
//                     alignItems="center"
//                     component="span"
//                     paddingLeft="350px"
//                     height="50px"
//                   >
//                     Organization:{user.role}
//                   </Typography>
//                 </CardContent>
//               </button>
//             </CardActionArea>
//             <div>
//               {modal && (
//                 <div className="modal">
//                   <div onClick={toggleModal} className="overlay"></div>
//                   <div className="modal-content">
//                     <h2>Hello </h2>
//                     <h4 text="primary"> username: {user.username}</h4>
//                     <h4> phone_number: {user.phone_number}</h4>
//                     <h4> email": {user.email}</h4>
//                     <h4> vendor_category: Juice</h4>
//                     <h4> role: {user.role}</h4>
//                     <h4> pincode: </h4>
//                     <h4> shop_name: PMart</h4>
//                     <h4> street: htreet</h4>
//                     <h4> area: harea"</h4>
//                     <button className="close-modal" onClick={toggleModal}>
//                       CLOSE
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Card>
//         ))}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import "./Customers.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import axios from "axios";
// export default function ActionAreaCard() {
//   const [modal, setModal] = useState(false);
//   // const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([""]);
//   const API = "http://localhost:9091/api/users";
//   const TOKEN =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3ZjRmM2VmOTRjMTAwMjQ4ODI1N2QiLCJpYXQiOjE2NzEzMDc3OTh9.byX--mb6q3JeQl3_hnS6_AWkxuVA-QAb6cr2Xcw6OOA";
//   const getAllUsers = async () => {
//     // setLoading(true);
//     await axios
//       .get(API, {
//         headers: {
//           Authorization: `Bearer ${TOKEN}`,
//           "Content-Type": "application/json",
//           // mode: "no-cors",
//         },
//       })
//       .then((res) => {
//         setData(res.data);
//         console.log(data);
//         // setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         // setLoading(false);
//       });
//   };
//   useEffect(() => {
//     getAllUsers();
//   });
//   const toggleModal = () => {
//     setModal(!modal);
//   };
//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   return (
//     <div>
//       {data
//         .filter((user) => user.role === 0)
//         .map((user) => (
//           <Card sx={{ maxWidth: "100%" }}>
//             <br />
//             <CardActionArea>
//               <button onClick={toggleModal}>
//                 <CardContent component="span">
//                   <Typography
//                     variant="h6"
//                     display="inline-block"
//                     alignItems="center"
//                     component="span"
//                     paddingLeft="150px"
//                     height="50px"
//                     paddingTop="30px"
//                   >
//                     {" "}
//                     Name: {user.username}
//                   </Typography>
//                   <Typography
//                     display="inline-block"
//                     variant="h6"
//                     alignItems="center"
//                     component="span"
//                     paddingLeft="250px"
//                     height="50px"
//                   >
//                     Phone-Number: {user.phone_number}
//                   </Typography>
//                   <Typography
//                     display="inline-block"
//                     variant="h6"
//                     alignItems="center"
//                     component="span"
//                     paddingLeft="350px"
//                     height="50px"
//                   >
//                     Organization:{user.role}
//                   </Typography>
//                 </CardContent>
//               </button>
//             </CardActionArea>
//             <div>
//               {modal && (
//                 <div className="modal">
//                   <div onClick={toggleModal} className="overlay"></div>
//                   <div className="modal-content">
//                     <h2>Hello </h2>
//                     <h4 text="primary"> username: {user.username}</h4>
//                     <h4> phone_number: {user.phone_number}</h4>
//                     <h4> email": {user.email}</h4>
//                     <h4> vendor_category: Juice</h4>
//                     <h4> role: {user.role}</h4>
//                     <h4> pincode: </h4>
//                     <h4> shop_name: PMart</h4>
//                     <h4> street: htreet</h4>
//                     <h4> area: harea"</h4>
//                     <button className="close-modal" onClick={toggleModal}>
//                       CLOSE
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Card>
//         ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Customers.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
import { Link } from "react-router-dom";

// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

// function createData(username: string, phone_number: number, email: string) {
//   return { username, phone_number, email };
// }

export default function Customers() {
  const [modal, setModal] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([""]);
  const API = "http://localhost:9091/api/users";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA3ZjRmM2VmOTRjMTAwMjQ4ODI1N2QiLCJpYXQiOjE2NzEzMDc3OTh9.byX--mb6q3JeQl3_hnS6_AWkxuVA-QAb6cr2Xcw6OOA";
  const getAllUsers = async () => {
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
  useEffect(() => {
    getAllUsers();
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
    <div>
      <div>
        <Box className="header" sx={{}}>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <div className="header_option">
              <span className="header_optionLineOne">Admin </span>
            </div>
          </Link>

          <Link to="/customers" style={{ textDecoration: "none" }}>
            <div className="header_option">
              <span className="header_optionLineOne">Customers</span>
            </div>
          </Link>

          <Link to="/deliveries" style={{ textDecoration: "none" }}>
            <div className="header_option">
              <span className="header_optionLineOne">Deliveries</span>
            </div>
          </Link>
          <Link to="/suppliers" style={{ textDecoration: "none" }}>
            <div className="header_option">
              <span className="header_optionLineOne">Suppliers</span>
            </div>
          </Link>
        </Box>
        <br></br>
        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search name,email,organization etc.., "
              inputProps={{ "aria-label": "search for suppliers details" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>
        </div>
        <br></br>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead className="tablerow1">
            <TableRow className="tablestyle">
              <TableCell className="cellcolor">Name</TableCell>
              <TableCell font-size="large" align="right">
                Phone Number
              </TableCell>
              <TableCell font-size="large" align="right">
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((user) => user.role === 3)
              .map((user) => (
                <TableRow
                  key={user.username}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.username}
                  </TableCell>
                  <TableCell align="right">{user.phone_number}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {data.map(
          (user) =>
            modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2>Hello </h2>
                  <h4 text="primary"> username: {user.username}</h4>
                  <h4> phone_number: {user.phone_number}</h4>
                  <h4> email": {user.email}</h4>
                  <h4> vendor_category: Juice</h4>
                  <h4> role: {user.role}</h4>
                  <h4> pincode: </h4>
                  <h4> shop_name: PMart</h4>
                  <h4> street: htreet</h4>
                  <h4> area: harea"</h4>
                  <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
