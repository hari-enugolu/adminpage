import React from "react";
import Dropdown from "./components/Dropdown";
import Admin from "./components/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Suppliers from "./components/Suppliers";
import Deliveries from "./components/Deliveries";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dropdown />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/suppliers" element={<Suppliers />}></Route>
          <Route path="/deliveries" element={<Deliveries />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
